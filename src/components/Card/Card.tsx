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
        alt='Disney image'
        title='title'
      />
      <section className='card-info'>
        <p className='card-info-name'>{name}</p>
        <div className='card-info-films'>
          <p className='card-info-films-feature'>Featured Films</p>
          <ul>
            <li className='card-info-films-item'>
              Aladdin, The king and the ring, Aladdin and the King of Thieves...
            </li>
          </ul>
        </div>
        <a href='/'>VIEW PROFILE</a>
      </section>
    </div>
  );
};
