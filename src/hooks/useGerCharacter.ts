import React from 'react';

export const useGetCharacter = ({ id }: { id: number }): Character | null => {
  const [character, setCharacter] = React.useState<Character | null>(null);

  React.useEffect(() => {
    async function getCharacters() {
      const res = await fetch(`https://api.disneyapi.dev/character/${id}`);
      const data = await res.json();
      setCharacter(data.data);
    }
    getCharacters();
  }, [id]);

  return character;
};
