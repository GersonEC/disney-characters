import './Card.css';

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
        src={imgUrl}
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
        <a href='/'>VIEW PROFILE</a>
      </section>
    </div>
  );
};
