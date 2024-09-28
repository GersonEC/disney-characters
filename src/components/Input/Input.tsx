import React, { ComponentProps } from 'react';
import './Input.css';

type InputProps = ComponentProps<'input'>;

export const Input: React.FC<InputProps> = ({ ...props }) => {
  return (
    <div className='input'>
      <label className='input-label' htmlFor={props.id} aria-label={props.name}>
        {props.name}
        <span className='input-required'>{props.required && '*'}</span>
      </label>
      <input
        className='input-field'
        id={props.id}
        name={props.name}
        placeholder={props.placeholder}
        required={props.required}
      />
    </div>
  );
};
