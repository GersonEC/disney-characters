import React from 'react';
import './App.css';
import Footer from './components/Footer';
import { Header } from './components/Header/Header';
import { useFilterCharacters } from './hooks/useFilterCharacters';

interface AppProps {
  children: React.ReactNode;
}
const App: React.FC<AppProps> = ({ children }) => {
  const [characterName, setCharacterName] = React.useState<string>('');
  const characters = useFilterCharacters({ name: characterName });

  console.log({ characters });

  const handleSubmit = (
    event: React.FormEvent<HTMLInputElement>,
    name: string
  ) => {
    event.preventDefault();
    setCharacterName(name);
  };

  return (
    <div className='app'>
      <Header handleSubmit={(event, name) => handleSubmit(event, name)} />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default App;
