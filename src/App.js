import React from 'react';
import Header from './components/layout/Header';
import Contacts from './components/contacts/Contacts';
// import UnControlComponent from './components/contacts/UnControlComponent';
import AddContact from './components/contacts/AddContact';

import { Provider } from './context';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <Provider>
      <div className="App">
        <Header branding="Contact Manager" />
        <div className="container">
          {/* <UnControlComponent /> */}
          <AddContact />
          <Contacts />
        </div>
      </div>
    </Provider>
  );
}

export default App;