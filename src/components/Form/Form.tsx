import { Link } from '@tanstack/react-router';
import Button from '../Button';
import Input from '../Input';
import './Form.css';

export const Form = () => {
  return (
    <div className='form'>
      <div className='form-name'>
        <Input id='first-name' name='First Name' placeholder='John' required />
        <Input id='last-name' name='Last Name' placeholder='Doe' required />
      </div>
      <Input id='city' name='City' placeholder='San Francisco' />
      <Input
        id='favorite-character'
        name='Favorite Disney Character'
        placeholder='Elsa'
      />
      <Input
        id='favorite-movie'
        name='Favorite Disney Movie'
        placeholder='Moana'
      />
      <div className='form-cta'>
        <Button variant='primary'>Update Profile</Button>
        <Link to='/profile' aria-label='cancel button'>
          <Button variant='secondary'>Cancel</Button>
        </Link>
      </div>
    </div>
  );
};
