import Card from '../../components/Card';
import './Home.css';
import FeaturedCharacters from '../../components/FeaturedCharacters';
import { useAllCharacters } from '../../hooks/useAllCharacters';

export const Home = () => {
  const allCharacters = useAllCharacters();
  const featureCharacters = allCharacters.slice(0, 4);

  return (
    <div className='home'>
      <section>
        <ul className='home-characters'>
          {allCharacters.map((character: Character) => (
            <li
              style={{ listStyle: 'none' }}
              key={`${character.name}-${character.id}`}
            >
              <Card
                films={character.films}
                id={character.id}
                imgUrl={character.imageUrl}
                name={character.name}
              />
            </li>
          ))}
        </ul>
      </section>
      <section>
        <FeaturedCharacters featuredCharacters={featureCharacters} />
      </section>
    </div>
  );
};
