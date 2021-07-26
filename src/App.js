import React from 'react';
import KVTemplate from './Templates/KVTemplate';
import PortfolioTemplate from './Templates/PortfolioTemplate';
import SkillTemplate from './Templates/SkillTemplate';
import ContactTemplate from './Templates/ContactTemplate';
import './App.css';

function App() {
  return (
    <div>
      <KVTemplate/>
      <PortfolioTemplate/>
      <SkillTemplate/>
      <ContactTemplate/>
    </div>
  );
}

export default App;
