import Card from '../../components/Card';
import './Home.css';
import FeaturedCharacters from '../../components/FeaturedCharacters';

export const Home = () => {
  return (
    <div className='home'>
      <section className='home-characters'>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </section>
      <section>
        <FeaturedCharacters />
      </section>
    </div>
  );
};
