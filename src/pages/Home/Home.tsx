import { useContext } from 'react';
import Card from '../../components/Card';
import FeaturedCharacters from '../../components/FeaturedCharacters';
import { useAllCharacters } from '../../hooks/useAllCharacters';
import { useFilterCharacters } from '../../hooks/useFilterCharacters';
import { Character } from '../../hooks/useGetCharacter';
import './Home.css';
import { CharacterNameContext } from '../../contexts/CharacterNameContext';

export const Home = () => {
  const allCharacters = useAllCharacters();
  const featureCharacters = allCharacters.slice(0, 4);
  const characterName = useContext(CharacterNameContext);
  const filteredCharacters = useFilterCharacters({ name: characterName });

  return (
    <div className='home'>
      <section>
        <ul className='home-characters'>
          {filteredCharacters.length > 0 ? (
            filteredCharacters.map((character: Character) => (
              <li
                style={{ listStyle: 'none' }}
                key={`${character.name}-${character._id}`}
              >
                <Card
                  films={character.films}
                  id={character._id}
                  imgUrl={character.imageUrl ?? ''}
                  name={character.name}
                />
              </li>
            ))
          ) : (
            <p>
              There are no Characters to show, please use the search bar to look
              for someone.
            </p>
          )}
        </ul>
      </section>
      <section>
        <FeaturedCharacters featuredCharacters={featureCharacters} />
      </section>
    </div>
  );
};
