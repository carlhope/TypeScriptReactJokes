import { element } from 'prop-types';
import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import { JokeAPI, DisplayUserName} from './Joke';

function App() {
    
   return (
    <div className="App">
      <header className="App-header">
               <>
                  <DisplayUserName />
              
                       <JokeAPI />
                   
               </>

      </header>
    </div>
  );
}

export default App;

