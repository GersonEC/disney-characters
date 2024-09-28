import React from 'react';
import { CharacterSchema } from '../utils/schemas';
import { z } from 'zod';

export const ZodSchema = z.object(CharacterSchema).array();

export type CharacterList = z.infer<typeof ZodSchema>;

export const useFilterCharacters = ({
  name,
}: {
  name: string;
}): CharacterList => {
  const [characters, setCharacters] = React.useState<CharacterList>([]);

  React.useEffect(() => {
    async function getCharacters() {
      const res = await fetch(
        `https://api.disneyapi.dev/character?name=${name}`
      );
      const data = await res.json();
      const characters = ZodSchema.parse(data.data);
      setCharacters(characters);
    }
    getCharacters();
  }, [name]);

  return characters;
};
