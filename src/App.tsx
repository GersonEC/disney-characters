import React from 'react';
import './App.css';
import Footer from './components/Footer';
import { Header } from './components/Header/Header';

interface AppProps {
  children: React.ReactNode;
}
const App: React.FC<AppProps> = ({ children }) => {
  return (
    <div className='app'>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default App;
