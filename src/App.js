import React from 'react';
import Header from './components/Header';
import Contact from './components/Contact';

import './App.css';

function App() {
  return (
    <div className="App">
      <Header branding="Contact Manager" />
      <Contact 
        name="Rejohn"
        email="rejohn@gmail.com"
        phone="01717546533"
      />
      <Contact 
        name="Atik"
        email="atik@gmail.com"
        phone="01552607608"
      />
    </div>
  );
}

export default App;
