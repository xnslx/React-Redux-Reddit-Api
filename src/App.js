import React from 'react';
import './App.css';
import SearchInput from './Component/SearchInput/SearchInput';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>Search Anything In Reddit</h2>
        <SearchInput />
      </header>
    </div>
  );
}

export default App;
