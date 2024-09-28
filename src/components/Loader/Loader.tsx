import { ThreeDots } from 'react-loading-icons';
import './Loader.css';

export const Loader = () => {
  return (
    <ThreeDots className='loader' fill='#054553' speed={1} height='20px' />
  );
};
