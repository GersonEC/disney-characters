import { ComponentProps } from 'react';
import './Button.css';

type ButtonProps = ComponentProps<'button'> & {
  variant: 'primary' | 'secondary';
  style?: 'default' | 'rounded';
};

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  style = 'default',
  ...props
}) => {
  return (
    <button className={`${variant} ${style}`} onClick={props.onClick}>
      {props.children}
    </button>
  );
};
