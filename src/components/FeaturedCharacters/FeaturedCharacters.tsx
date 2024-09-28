import { Character } from '../../hooks/useGetCharacter';
import Card from '../Card';
import './FeaturedCharacters.css';

interface Props {
  featuredCharacters: Character[];
}

export const FeaturedCharacters: React.FC<Props> = ({ featuredCharacters }) => {
  return (
    <div className='featured-characters'>
      <h2>Featured Characters!</h2>
      <section>
        <ul className='featured-characters-list'>
          {featuredCharacters.map((character: Character) => (
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
          ))}
        </ul>
      </section>
    </div>
  );
};
