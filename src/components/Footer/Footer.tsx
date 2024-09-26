import DisneyLogo from '/public/disney_logo.svg';
import './Footer.css';

export const Footer = () => {
  return (
    <footer className='footer'>
      <img src={DisneyLogo} alt='Disney logo' height='32px' />
      <p className='footer-disclaimer'>
        For educational use only. All characters and content are the property of
        Disney. This test is for private use and development testing only and
        should not be distributed for public consumption.
      </p>
    </footer>
  );
};
