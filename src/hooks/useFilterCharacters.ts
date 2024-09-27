import React from 'react';

export const useFilterCharacters = ({
  name,
}: {
  name: string;
}): Character[] => {
  const [characters, setCharacters] = React.useState<Character[]>([]);

  React.useEffect(() => {
    async function getCharacters() {
      const res = await fetch(
        `https://api.disneyapi.dev/character?name=${name}`
      );
      const data = await res.json();
      setCharacters(data.data);
    }
    getCharacters();
  }, [name]);

  return characters;
};
