import './Card.css';

export const Card = () => {
  return (
    <div className='card'>
      <img
        className='card-image'
        src='https://static.wikia.nocookie.net/disney/images/1/15/Arianna_Tangled.jpg'
        alt='Disney image'
        title='title'
      />
      <section className='card-info'>
        <p className='card-info-name'>Jafar</p>
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
