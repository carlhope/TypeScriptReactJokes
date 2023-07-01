import React, { useState } from 'react';
import './App.css';
import { JokeAPI} from './Joke';

function App() {
    const refresh = () => JokeAPI();
  return (
    <div className="App">
      <header className="App-header">
              <>
                  <p><JokeAPI /></p> 
                  <button type="button" onClick={refresh}>New Joke</button>
               </>   

      </header>
    </div>
  );
}

export default App;
