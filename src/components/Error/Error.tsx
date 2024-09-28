import SadMickey from '/src/assets/sad-mickey.png';
import './Error.css';

export const Error = () => {
  return (
    <div className='error'>
      <img className='sad-mickey' src={SadMickey} alt='Sad Mickey' />
      <p className='error-sorry'>
        Sorry, something went wrong. Please, reload the browser.
      </p>
    </div>
  );
};
