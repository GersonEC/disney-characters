import { Link } from '@tanstack/react-router';
import './Card.css';
import DefaultImage from '/src/assets/disney-default-image.jpg';

interface CardProps {
  films: string[];
  id: number;
  imgUrl: string;
  name: string;
}

export const Card: React.FC<CardProps> = ({ films, id, imgUrl, name }) => {
  return (
    <div className='card'>
      <img
        className='card-image'
        src={imgUrl || DefaultImage}
        alt={`${name} profile picture`}
        title={name}
      />
      <section className='card-info'>
        <p className='card-info-name'>{name}</p>
        <div className='card-info-films'>
          <p className='card-info-films-feature'>Featured Films</p>
          <ul>
            {films.length > 0 ? (
              films.map((film: string) => (
                <li key={`${id}-${film}`} className='card-info-films-item'>
                  {film}{' '}
                </li>
              ))
            ) : (
              <p>There are no featured films</p>
            )}
          </ul>
        </div>
        <Link to={`/details/${id}`} aria-label='view character profile'>
          VIEW PROFILE
        </Link>
      </section>
    </div>
  );
};
