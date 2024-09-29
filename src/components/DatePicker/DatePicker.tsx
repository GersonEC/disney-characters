import React, { ComponentProps } from 'react';
import './DatePicker.css';

type DatePickerProps = ComponentProps<'input'> & {
  label: string;
};

export const DatePicker: React.FC<DatePickerProps> = ({ label, ...props }) => {
  return (
    <div className='date'>
      <label className='date-label' htmlFor={props.id} aria-label={props.name}>
        {label}
        <span className='date-required'>{props.required && '*'}</span>
      </label>
      <input className='date-field' type='date' />
    </div>
  );
};
