import React from 'react';
import { useNavigate } from '@tanstack/react-router';
import Footer from './components/Footer';
import { Header } from './components/Header/Header';
import { CharacterNameContext } from './contexts/CharacterNameContext';
import './App.css';

interface AppProps {
  children: React.ReactNode;
}
const App: React.FC<AppProps> = ({ children }) => {
  const navigate = useNavigate();
  const [characterName, setCharacterName] = React.useState<string>('');

  const handleSubmit = (
    event: React.FormEvent<HTMLInputElement>,
    name: string
  ) => {
    event.preventDefault();
    setCharacterName(name);
    navigate({ to: '/' });
  };

  return (
    <CharacterNameContext.Provider value={characterName}>
      <div className='app'>
        <Header handleSubmit={(event, name) => handleSubmit(event, name)} />
        <main>{children}</main>
        <Footer />
      </div>
    </CharacterNameContext.Provider>
  );
};

export default App;
