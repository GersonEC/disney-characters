import { Link } from '@tanstack/react-router';
import Button from '../../components/Button';
import FeaturedCharacters from '../../components/FeaturedCharacters';
import { useAllCharacters } from '../../hooks/useAllCharacters';
import { useGetCharacter } from '../../hooks/useGetCharacter';
import { rootRoute } from '../../routes';
import './Details.css';

export const Details = () => {
  const { characterId } = rootRoute.useParams();
  const allCharacters = useAllCharacters();
  const featureCharacters = allCharacters.slice(0, 4);

  const character = useGetCharacter({ id: characterId });

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
              {character.films.length > 0 ? (
                character.films.map((film: string) => (
                  <li key={`${character._id}-${film}`}>{film}</li>
                ))
              ) : (
                <p>There are no featured films</p>
              )}
            </ul>
          </div>
          <div>
            <h3>Short Films</h3>
            <ul>
              {character.shortFilms.length > 0 ? (
                character.shortFilms.map((film: string) => (
                  <li key={`${character._id}-${film}`}>{film}</li>
                ))
              ) : (
                <p>There are no short films</p>
              )}
            </ul>
          </div>
          <div>
            <h3>TV Shows</h3>
            <ul>
              {character.tvShows.length > 0 ? (
                character.tvShows.map((film: string) => (
                  <li key={`${character._id}-${film}`}>{film}</li>
                ))
              ) : (
                <p>There are no tv shows</p>
              )}
            </ul>
          </div>
          <Link to={character.sourceUrl} target='_blank'>
            <Button variant='primary'>Explore More Character Details</Button>
          </Link>
        </div>
      </section>
      <section>
        <FeaturedCharacters featuredCharacters={featureCharacters} />
      </section>
    </div>
  );
};
