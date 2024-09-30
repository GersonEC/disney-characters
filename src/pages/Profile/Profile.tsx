import { Link } from '@tanstack/react-router';
import Button from '../../components/Button';
import { useUser } from '../../hooks/useUser';
import './Profile.css';

export const Profile = () => {
  const { state: user, resetUser } = useUser();

  const handleReset = () => {
    if (window.confirm('Do you really want to reset your profile?')) {
      resetUser();
    }
  };

  const age = Number(
    new Date().getFullYear() - new Date(user.birthDate).getFullYear()
  );

  console.log({ age });

  return (
    <div className='profile'>
      <h1 className='profile-name'>{`${user.firstName || 'John'} ${user.lastName || 'Doe'}`}</h1>
      <p className='profile-updated'>Last Updated May 20th, 2024</p>
      <p className='profile-info'>
        Age: <i>{age === 0 ? '' : age}</i>
      </p>
      <p className='profile-info'>
        Location: <i>{`${user.city ? user.city + ',' : ''} ${user.state}`}</i>
      </p>
      <p className='profile-info'>
        Favorite Disney Character: <i>{user.favoriteCharacter}</i>
      </p>
      <p className='profile-info'>
        Favorite Disney Movie: <i>{user.favoriteMovie}</i>
      </p>
      <p className='profile-info'>
        Favorite Disneyland: <i>{user.favoriteLocation}</i>
      </p>
      <div className='profile-cta'>
        <Link to='/edit-profile' aria-label='Go to edit profile page'>
          <Button variant='primary'>Edit Profile</Button>
        </Link>
        <Button variant='secondary' onClick={handleReset}>
          Reset Profile
        </Button>
      </div>
    </div>
  );
};
