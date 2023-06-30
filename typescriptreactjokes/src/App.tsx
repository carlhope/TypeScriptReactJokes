import React from 'react';
import './App.css';
import { Car } from './plaything';
import { Jokes } from './Joke';

function App() {
    const joking = new Jokes();
   const thejoke = joking.Joker();

  return (
    <div className="App">
      <header className="App-header">
              <>
                  <p><Car /></p>
                  <p>hello</p>
              </>

      </header>
    </div>
  );
}

export default App;
