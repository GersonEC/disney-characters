import Button from '../Button';
import DisneyLogo from '/src/assets/disney_logo.svg';

export const Header = () => {
  return (
    <header className='header'>
      <img src={DisneyLogo} alt='Disney logo' height='34px' />
      <h1>FIND A CHARACTER</h1>
      <Button variant='primary'>USER</Button>
    </header>
  );
};
