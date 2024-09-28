import React from 'react';
import { z } from 'zod';
import { CharacterSchema } from '../utils/schemas';

export const ZodSchema = z.object(CharacterSchema).array();

export type CharacterList = z.infer<typeof ZodSchema>;

export const useAllCharacters = (): CharacterList => {
  const [characters, setCharacters] = React.useState<CharacterList>([]);

  React.useEffect(() => {
    async function getCharacters() {
      const res = await fetch('https://api.disneyapi.dev/character');
      const data = await res.json();
      const characters = ZodSchema.parse(data.data);
      setCharacters(characters);
    }
    getCharacters();
  }, []);

  return characters;
};
