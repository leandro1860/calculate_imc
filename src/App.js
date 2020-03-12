import React from 'react';
import TitleComponent from './components/TitleComponent.js';
import CalculateComponent from './components/CalculateComponent.js';
import TableComponent from './components/TableComponent.js';
import MainTitleComponent from './components/MainTitleComponent.js';
import './components/styles/TitleComponent.css';
import './components/styles/CalculateComponent.css';
import './components/styles/TableComponent.css';
import './components/styles/MainTitleComponent.css';

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <MainTitleComponent />
        <CalculateComponent />
        <TableComponent />
        <TitleComponent />
      </header>
    </div>
  );
}

export default App;
