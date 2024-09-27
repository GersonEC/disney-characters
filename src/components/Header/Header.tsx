import Button from '../Button';
import Search from '../Search';
import DisneyLogo from '/src/assets/disney_logo.svg';

interface Props {
  handleSubmit: (
    event: React.FormEvent<HTMLInputElement>,
    name: string
  ) => void;
}
export const Header: React.FC<Props> = ({ handleSubmit }) => {
  return (
    <header className='header'>
      <img src={DisneyLogo} alt='Disney logo' height='34px' />
      <Search
        id='character'
        name='character'
        placeholder='Find a character...'
        handleSubmit={handleSubmit}
      />
      <Button variant='primary'>USER</Button>
    </header>
  );
};
