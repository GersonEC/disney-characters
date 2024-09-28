import { useContext } from 'react';
import Card from '../../components/Card';
import FeaturedCharacters from '../../components/FeaturedCharacters';
import { useFilterCharacters } from '../../hooks/useFilterCharacters';
import { Character } from '../../hooks/useGetCharacter';
import './Home.css';
import { CharacterNameContext } from '../../contexts/CharacterNameContext';
import Loader from '../../components/Loader';

export const Home = () => {
  const characterName = useContext(CharacterNameContext);
  const { status, data: characters } = useFilterCharacters(characterName);

  if (status === 'pending') return <Loader />;
  if (status === 'error') return <h1>Error</h1>;

  if (characters) {
    const featureCharacters = characters.slice(0, 4);
    return (
      <div className='home'>
        <section>
          <ul className='home-characters'>
            {characters.length > 0 ? (
              characters.map((character: Character) => (
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
                There are no Characters to show, please use the search bar to
                look for someone.
              </p>
            )}
          </ul>
        </section>
        <section>
          <FeaturedCharacters featuredCharacters={featureCharacters} />
        </section>
      </div>
    );
  }
};
