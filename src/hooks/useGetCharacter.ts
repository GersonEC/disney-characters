import React from 'react';
import { z } from 'zod';
import { CharacterSchema } from '../utils/schemas';

const ZodSchema = z.object(CharacterSchema);

export type Character = z.infer<typeof ZodSchema>;

export const useGetCharacter = ({ id }: { id: number }): Character | null => {
  const [character, setCharacter] = React.useState<Character | null>(null);

  React.useEffect(() => {
    async function getCharacters() {
      const res = await fetch(`https://api.disneyapi.dev/character/${id}`);
      const data = await res.json();
      const character = ZodSchema.parse(data.data);
      setCharacter(character);
    }
    getCharacters();
  }, [id]);

  return character;
};
