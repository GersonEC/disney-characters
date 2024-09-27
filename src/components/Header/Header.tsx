import Button from '../Button';
import Search from '../Search';
import DisneyLogo from '/src/assets/disney_logo.svg';

export const Header = () => {
  return (
    <header className='header'>
      <img src={DisneyLogo} alt='Disney logo' height='34px' />
      <Search
        id='character'
        name='character'
        placeholder='Find a character...'
      />
      <Button variant='primary'>USER</Button>
    </header>
  );
};
