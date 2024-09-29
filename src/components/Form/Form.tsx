import { Link } from '@tanstack/react-router';
import Button from '../Button';
import Input from '../Input';
import './Form.css';
import { Select } from '../Select/Select';
import { stateOptions } from '../../utils/mocks';

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
      <Select id='state-select' aria-expanded={false} label='State'>
        <option
          id={'select-default'}
          aria-selected={true}
          aria-label={'select-default'}
          value={''}
        >
          Choose a state
        </option>
        {stateOptions.map((state: string) => (
          <option
            id={state}
            aria-selected={false}
            aria-label={state}
            value={state}
          >
            {state}
          </option>
        ))}
      </Select>
      <div className='form-cta'>
        <Button variant='primary'>Update Profile</Button>
        <Link to='/profile' aria-label='cancel button'>
          <Button variant='secondary'>Cancel</Button>
        </Link>
      </div>
    </div>
  );
};
