import { Link } from '@tanstack/react-router';
import './Card.css';
import DefaultImage from '/src/assets/disney-default-image.jpg';
import Button from '../Button';

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
        <div>
          <p className='card-info-name'>{name}</p>
          <div className='card-info-films'>
            <p className='card-info-films-feature'>Featured Films</p>
            <ul className='card-info-films-list'>
              {films.length > 0 ? (
                films.map((film: string) => (
                  <li key={`${id}-${film}`} className='card-info-films-item'>
                    {film}
                    {', '}
                  </li>
                ))
              ) : (
                <p>There are no featured films</p>
              )}
            </ul>
          </div>
        </div>
        <div className='card-info-cta'>
          <Link to={`/details/${id}`} aria-label='view character profile'>
            <Button variant='primary'>VIEW PROFILE</Button>
          </Link>
        </div>
      </section>
    </div>
  );
};
