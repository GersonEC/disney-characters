import { Link } from '@tanstack/react-router';
import Button from '../../components/Button';
import { useUser } from '../../hooks/useUser';
import './Profile.css';

export const Profile = () => {
  const { state: user, resetUser } = useUser();

  const handleReset = () => resetUser();

  const age = Number(
    new Date().getFullYear() - new Date(user.birthDate).getFullYear()
  );

  return (
    <div className='profile'>
      <h1 className='profile-name'>{`${user.firstName?.charAt(0).toUpperCase() || 'John'} ${user.firstName?.charAt(0).toUpperCase() || 'Doe'}`}</h1>
      <p className='profile-updated'>Last Updated May 20th, 2024</p>
      <p className='profile-info'>Age: {age === 0 ? '' : age}</p>
      <p className='profile-info'>
        Location: {`${user.city ? user.city + ',' : ''} ${user.state}`}
      </p>
      <p className='profile-info'>
        Favorite Disney Character: {user.favoriteCharacter}
      </p>
      <p className='profile-info'>
        Favorite Disney Movie: {user.favoriteMovie}
      </p>
      <p className='profile-info'>
        Favorite Disneyland: {user.favoriteLocation}
      </p>
      <div className='profile-cta'>
        <Link to='/edit-profile' aria-label='Go to edit profile page'>
          <Button variant='primary'>Edite Profile</Button>
        </Link>
        <Button variant='secondary' onClick={handleReset}>
          Reset Profile
        </Button>
      </div>
    </div>
  );
};
