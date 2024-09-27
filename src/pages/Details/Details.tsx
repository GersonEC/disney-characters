import Button from '../../components/Button';
import FeaturedCharacters from '../../components/FeaturedCharacters';
import { useAllCharacters } from '../../hooks/useAllCharacters';
import { useGetCharacter } from '../../hooks/useGerCharacter';
import './Details.css';

export const Details = () => {
  const allCharacters = useAllCharacters();
  const featureCharacters = allCharacters.slice(0, 4);

  const character = useGetCharacter({ id: 202 });

  if (!character) return <p>Loading...</p>;

  return (
    <div className='details'>
      <section className='details-info'>
        <div>
          <img
            className='details-info_picture'
            src={character.imageUrl}
            alt={`${character.name} image`}
            title={character.name}
          />
        </div>
        <div className='details-info-data'>
          <h2 className='details-info-data_name'>{character.name}</h2>
          <p className='details-info-data_updated'>
            Last Updated December 20th, 2021
          </p>
          <div>
            <h3>Featured Films</h3>
            <ul>
              {character.films.map((film: string) => (
                <li key={`${character.id}-${film}`}>{film}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3>Short Films</h3>
            <ul>
              {character.shortFilms.map((film: string) => (
                <li key={`${character.id}-${film}`}>{film}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3>TV Shows</h3>
            <ul>
              {character.tvShows.map((film: string) => (
                <li key={`${character.id}-${film}`}>{film}</li>
              ))}
            </ul>
          </div>
          <Button variant='primary'>Explore More Character Details</Button>
        </div>
      </section>
      <section>
        <FeaturedCharacters featuredCharacters={featureCharacters} />
      </section>
    </div>
  );
};
