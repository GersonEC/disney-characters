import Card from '../../components/Card';
import FeaturedCharacters from '../../components/FeaturedCharacters';
import { useAllCharacters } from '../../hooks/useAllCharacters';
import './Home.css';

export const Home = () => {
  const allCharacters = useAllCharacters();
  const limitedCharacters = allCharacters.slice(15, 50);
  const featureCharacters = allCharacters.slice(0, 4);
  return (
    <div className='home'>
      <section>
        <ul className='home-characters'>
          {limitedCharacters.map((character: Character) => (
            <li
              style={{ listStyle: 'none' }}
              key={`${character.name}-${character._id}`}
            >
              <Card
                films={character.films}
                id={character._id}
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
