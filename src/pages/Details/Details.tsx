import { Link } from '@tanstack/react-router';
import Button from '../../components/Button';
import FeaturedCharacters from '../../components/FeaturedCharacters';
import { useGetCharacter } from '../../hooks/useGetCharacter';
import { rootRoute } from '../../routes';
import { useFilterCharacters } from '../../hooks/useFilterCharacters';
import DefaultImage from '/src/assets/disney-default-image.jpg';
import Loader from '../../components/Loader';
import './Details.css';
import React from 'react';

export const Details = () => {
  const { characterId } = rootRoute.useParams();
  const { data: filterCharacters } = useFilterCharacters();
  const featureCharacters = filterCharacters && filterCharacters.slice(0, 4);

  const { status, data: character } = useGetCharacter({ id: characterId });

  React.useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (status === 'pending') return <Loader />;
  if (status === 'error') return <h1>Error</h1>;

  if (character) {
    return (
      <div className='details'>
        <section className='details-info'>
          <div>
            <img
              className='details-info_picture'
              src={character.imageUrl || DefaultImage}
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
            <Link
              to={character.sourceUrl}
              target='_blank'
              aria-label='Explore More Character Details'
            >
              <Button variant='primary'>Explore More Character Details</Button>
            </Link>
          </div>
        </section>
        <section>
          <FeaturedCharacters featuredCharacters={featureCharacters ?? []} />
        </section>
      </div>
    );
  }
};
