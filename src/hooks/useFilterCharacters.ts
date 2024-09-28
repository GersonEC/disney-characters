import { CharacterSchema } from '../utils/schemas';
import { z } from 'zod';
import { useQuery } from '@tanstack/react-query';

export const ZodSchema = z.object(CharacterSchema).array();

export type CharacterList = z.infer<typeof ZodSchema>;

const getCharactersUrlApi = (name: string = '') => {
  if (name) {
    return `https://api.disneyapi.dev/character?name=${name}`;
  } else {
    return 'https://api.disneyapi.dev/character';
  }
};

async function getCharactersByName(name: string) {
  const res = await fetch(getCharactersUrlApi(name));
  const data = await res.json();
  const characters = ZodSchema.parse(data.data);
  return characters;
}

interface Response {
  status: 'success' | 'pending' | 'error';
  data?: CharacterList;
}

export const useFilterCharacters = (name: string = ''): Response => {
  const { status, data } = useQuery({
    queryKey: ['characters', name],
    queryFn: () => getCharactersByName(name),
  });

  return { status, data };
};
