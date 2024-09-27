import React from 'react';

export const useAllCharacters = (): Character[] => {
  const [characters, setCharacters] = React.useState<Character[]>([]);

  React.useEffect(() => {
    async function getCharacters() {
      const res = await fetch('https://api.disneyapi.dev/character');
      const data = await res.json();
      setCharacters(data.data);
    }
    getCharacters();
  }, []);

  return characters;
};
