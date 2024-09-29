import { useContext } from 'react';
import Card from '../../components/Card';
import FeaturedCharacters from '../../components/FeaturedCharacters';
import { useFilterCharacters } from '../../hooks/useFilterCharacters';
import { Character } from '../../hooks/useGetCharacter';
import { CharacterNameContext } from '../../contexts/CharacterNameContext';
import Loader from '../../components/Loader';
import Error from '../../components/Error';
import './Home.css';

export const Home = () => {
  const characterName = useContext(CharacterNameContext);
  const { status, data: characters } = useFilterCharacters(characterName);
  const { status: featureCharactersStatus, data: featuredCharacters } =
    useFilterCharacters('');

  if (status === 'pending' || featureCharactersStatus === 'pending')
    return <Loader />;
  if (status === 'error' || featureCharactersStatus === 'error')
    return <Error />;

  if (characters && featuredCharacters) {
    return (
      <div className='home'>
        <section>
          {characterName && (
            <h1 className='home-search'>Search Results - {characterName}</h1>
          )}
          <ul className='home-characters'>
            {characters.length > 0 ? (
              characters.slice(0, 10).map((character: Character) => (
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
                look for someone else.
              </p>
            )}
          </ul>
        </section>
        <section>
          <FeaturedCharacters
            featuredCharacters={featuredCharacters?.slice(5, 9)}
          />
        </section>
      </div>
    );
  }
};
