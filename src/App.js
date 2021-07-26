import React from 'react';
import KVTemplate from './Templates/KVTemplate';
import AboutTemplate from './Templates/AboutTemplate';
import PortfolioTemplate from './Templates/PortfolioTemplate';
import SkillTemplate from './Templates/SkillTemplate';
import ContactTemplate from './Templates/ContactTemplate';
import './App.css';

function App() {
  return (
    <div>
      <KVTemplate/>
      <AboutTemplate/>
      <PortfolioTemplate/>
      <SkillTemplate/>
      <ContactTemplate/>
    </div>
  );
}

export default App;
