import React, { ComponentProps } from 'react';
import './Select.css';

type SelectProps = ComponentProps<'select'> & {
  label: string;
  children: React.ReactNode;
};

export const Select: React.FC<SelectProps> = ({
  label,
  children,
  ...props
}) => {
  return (
    <div className='select'>
      <label className='select-label' htmlFor={props.id} id={label}>
        {label}
      </label>
      <select
        className='select-field'
        id={props.id}
        value={props.value}
        onChange={props.onChange}
      >
        {children}
      </select>
    </div>
  );
};
