import { ComponentProps } from 'react';
import './Button.css';

type ButtonProps = ComponentProps<'button'> & {
  variant: 'primary' | 'secondary';
};

export const Button: React.FC<ButtonProps> = ({ variant, ...props }) => {
  return (
    <button className={variant} onClick={props.onClick}>
      {props.children}
    </button>
  );
};
