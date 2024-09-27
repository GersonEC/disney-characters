import FeaturedCharacters from '../../components/FeaturedCharacters';
import './Details.css';

export const Details = () => {
  return (
    <div className='details'>
      <section className='details-info'>
        <div>
          <img
            className='details-info_picture'
            src='https://static.wikia.nocookie.net/disney/images/1/15/Arianna_Tangled.jpg'
            alt='Queen Arianna image'
            title='Queen Arianna'
          />
        </div>
        <div className='details-info-data'>
          <h2 className='details-info-data_name'>Queen Arianna</h2>
          <p className='details-info-data_updated'>
            Last Updated December 20th, 2021
          </p>
          <div>
            <h3>Featured Films</h3>
            <ul>
              <li>Frozen</li>
              <li>Frozen2</li>
              <li>Ralph Breaks the Internet</li>
            </ul>
          </div>
          <div>
            <h3>Short Films</h3>
            <ul>
              <li>Frozen Fever</li>
              <li>The art of Keeping Cool</li>
              <li>Olaf's Frozen Adventure</li>
              <li>Once Upon a Snowmane</li>
            </ul>
          </div>
          <div>
            <h3>TV Shows</h3>
            <ul>
              <li>It's a Small World: The Animated Series</li>
              <li>Once Upon a Time</li>
              <li>Frozen: Northern Lights</li>
            </ul>
          </div>
          <button>Explore More Character Details</button>
        </div>
      </section>
      <section>
        <FeaturedCharacters />
      </section>
    </div>
  );
};
