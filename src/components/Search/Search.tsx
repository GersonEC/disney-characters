import React, { ComponentProps } from 'react';
import './Search.css';

type SearchProps = ComponentProps<'input'>;

export const Search: React.FC<SearchProps> = ({ ...props }) => {
  const handleSubmit = () => alert('Submitted!');
  return (
    <search>
      <form onSubmit={handleSubmit}>
        <input
          id={props.id}
          type='search'
          name={props.name}
          placeholder={props.placeholder}
        />
      </form>
    </search>
  );
};
