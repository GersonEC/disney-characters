import { Link } from '@tanstack/react-router';
import Button from '../../components/Button';
import './Profile.css';

export const Profile = () => {
  return (
    <div className='profile'>
      <h1 className='profile-name'>John Doe</h1>
      <p className='profile-updated'>Last Updated May 20th, 2024</p>
      <p className='profile-info'>Age: 26</p>
      <p className='profile-info'>Location: San Francisco, CA</p>
      <p className='profile-info'>Favorite Disney Character: Elsa</p>
      <p className='profile-info'>Favorite Disney Ride: Space Mountain</p>
      <p className='profile-info'>Favorite Disney Movie: Moana</p>
      <p className='profile-info'>Favorite Disneyland: Disney World, Florida</p>
      <Link to='/edit-profile' aria-label='Go to edit profile page'>
        <Button variant='primary'>Edite Profile</Button>
      </Link>
    </div>
  );
};
