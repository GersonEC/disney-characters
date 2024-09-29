import { Link, useNavigate } from '@tanstack/react-router';
import Button from '../Button';
import Input from '../Input';
import { Select } from '../Select/Select';
import { disneylandOptions, stateOptions } from '../../utils/mocks';
import { DatePicker } from '../DatePicker/DatePicker';
import { User, useUser } from '../../hooks/useUser';
import './Form.css';

export const Form: React.FC = () => {
  const navigate = useNavigate();
  const { updateUser } = useUser();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleSubmit = (event: any) => {
    event.preventDefault();
    const user: User = {
      firstName: event.target[0].value,
      lastName: event.target[1].value,
      birthDate: new Date(event.target[2].value),
      city: event.target[3].value,
      state: event.target[4].value,
      favoriteCharacter: event.target[5].value,
      favoriteMovie: event.target[6].value,
      favoriteLocation: event.target[7].value,
    };
    if (window.confirm('Do you really want to update your profile?')) {
      alert('Profile updated successfully.');
      updateUser(user);
      navigate({
        to: '/profile',
      });
    }
  };

  return (
    <form className='form' onSubmit={handleSubmit}>
      <div className='form-name'>
        <Input id='first-name' name='First Name' placeholder='John' required />
        <Input id='last-name' name='Last Name' placeholder='Doe' required />
      </div>
      <DatePicker label='Birth Date' required />
      <div className='form-location'>
        <Input id='city' name='City' placeholder='San Francisco' />
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
              key={state}
              id={state}
              aria-selected={false}
              aria-label={state}
              value={state}
            >
              {state}
            </option>
          ))}
        </Select>
      </div>
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
      <Select
        id='disneyland-select'
        aria-expanded={false}
        label='Favorite Disneyland'
      >
        <option
          id={'select-default'}
          aria-selected={true}
          aria-label={'select-default'}
          value={''}
        >
          Choose a Disneyland
        </option>
        {disneylandOptions.map((location: string) => (
          <option
            key={location}
            id={location}
            aria-selected={false}
            aria-label={location}
            value={location}
          >
            {location}
          </option>
        ))}
      </Select>
      <div className='form-cta'>
        <Button type='submit' variant='primary'>
          Update Profile
        </Button>
        <Link to='/profile' aria-label='cancel button'>
          <Button variant='secondary'>Cancel</Button>
        </Link>
      </div>
    </form>
  );
};
