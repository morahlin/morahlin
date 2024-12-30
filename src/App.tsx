import React from 'react';
import Header from './components/Header';
import Home from './components/Home';

const App: React.FC = () => {
  return (
    <div className="bg-black text-white">
      <Header />
      <Home />
    </div>
  );
};

export default App;
