import React from 'react';
import './App.css';
import Footer from './components/Footer';
import { Header } from './components/Header/Header';
import { CharacterNameContext } from './contexts/CharacterNameContext';

interface AppProps {
  children: React.ReactNode;
}
const App: React.FC<AppProps> = ({ children }) => {
  const [characterName, setCharacterName] = React.useState<string>('');

  const handleSubmit = (
    event: React.FormEvent<HTMLInputElement>,
    name: string
  ) => {
    event.preventDefault();
    setCharacterName(name);
  };

  return (
    <div className='app'>
      <CharacterNameContext.Provider value={characterName}>
        <Header handleSubmit={(event, name) => handleSubmit(event, name)} />
        <main>{children}</main>
        <Footer />
      </CharacterNameContext.Provider>
    </div>
  );
};

export default App;
