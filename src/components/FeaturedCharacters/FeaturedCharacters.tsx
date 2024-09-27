import Card from '../Card';
import './FeaturedCharacters.css';

export const FeaturedCharacters = () => {
  return (
    <div className='featured-characters'>
      <h2>Featured Characters!</h2>
      <section className='featured-characters-list'>
        <Card />
        <Card />
        <Card />
        <Card />
      </section>
    </div>
  );
};
