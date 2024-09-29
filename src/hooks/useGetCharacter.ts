import { z } from 'zod';
import { CharacterSchema } from '../utils/schemas';
import { useQuery } from '@tanstack/react-query';

const ZodSchema = z.object(CharacterSchema);

export type Character = z.infer<typeof ZodSchema>;

async function getCharacter(id: number) {
  const res = await fetch(`https://api.disneyapi.dev/character/${id}`);
  const data = await res.json();
  const character = ZodSchema.parse(data.data);
  return character;
}

interface Response {
  status: 'success' | 'pending' | 'error';
  data?: Character;
}

/**
 * useGetCharacter is a hook to retrieve the character information.
 * @param {numer} id - The id of the character.
 */
export const useGetCharacter = ({ id }: { id: number }): Response => {
  const { status, data } = useQuery({
    queryKey: ['character', id],
    queryFn: () => getCharacter(id),
  });

  return {
    status,
    data,
  };
};
