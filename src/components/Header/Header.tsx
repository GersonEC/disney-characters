import { Link } from '@tanstack/react-router';
import Button from '../Button';
import Search from '../Search';
import DisneyLogo from '/src/assets/disney_logo.svg';
import UserIcon from '/src/assets/user-icon.svg';

interface Props {
  handleSubmit: (
    event: React.FormEvent<HTMLInputElement>,
    name: string
  ) => void;
}
export const Header: React.FC<Props> = ({ handleSubmit }) => {
  return (
    <header className='header'>
      <Link to='/' aria-label='Go to home page'>
        <img src={DisneyLogo} alt='Disney logo' height='34px' />
      </Link>
      <Search
        id='character'
        name='character'
        placeholder='Find a character...'
        handleSubmit={handleSubmit}
      />
      <div>
        <Link
          className='user-icon'
          to='/profile'
          aria-label='Go to profile page'
        >
          <Button variant='primary' style='rounded'>
            <img src={UserIcon} alt='User icon' height='26px' />
          </Button>
        </Link>
      </div>
    </header>
  );
};
