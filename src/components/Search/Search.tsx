import React, { ComponentProps } from 'react';
import './Search.css';

type SearchProps = ComponentProps<'input'> & {
  handleSubmit: (
    event: React.FormEvent<HTMLInputElement>,
    name: string
  ) => void;
};

export const Search: React.FC<SearchProps> = ({ handleSubmit, ...props }) => {
  const [name, setName] = React.useState('');

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value;
    setName(value);
  };
  return (
    <search>
      <form
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        onSubmit={(event: any) => handleSubmit(event, name)}
      >
        <input
          className='input-search'
          id={props.id}
          type='search'
          name={props.name}
          placeholder={props.placeholder}
          value={name}
          onChange={handleChange}
        />
      </form>
    </search>
  );
};
