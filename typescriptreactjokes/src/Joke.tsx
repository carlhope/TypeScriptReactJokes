import axios from "axios";
import React, { useState, useEffect } from "react";
import { text } from "stream/consumers";

function JokeAPI() {
    const [joke, setJoke] = useState(null);
    const [setup, setSetup] = useState(null);
    const [punchline, setPunchline] = useState(null);
    const [error, setError] = useState(false);
    const [state, setState] = useState('');
    const [name, setName] = useState("World");
    const [seed, setSeed] = useState(0);
    
    useEffect(() => {
        setState('loading');
        axios
            .get('https://v2.jokeapi.dev/joke/Any?format=json')
            .then((res) => {
                setState('success');

                const onelinerString = res.data.joke;
                setJoke(onelinerString);

                const setupString = res.data.setup;
                setSetup(setupString);

                const punchlineString = res.data.delivery;
                setPunchline(punchlineString);
                
                console.log(onelinerString);
                console.log(setupString);
                console.log(punchlineString);
            })
            .catch((err) => {
                console.error('Error:', err);
                setState('error');
                setError(err);
            });
    }, [seed]);
    if (state === 'error')
        return (
            <h1>

                {error.toString()}
            </h1>
        );
    return (
        <div>
            <div>
                {state === 'loading' ? (
                    <h1>Loading...</h1>
                ) : (
                        <>
                            <label> Enter Name:<input type="text" content="hi" onChange={e => setName(e.target.value)}></input></label>
                            
                            <p>hello {name}, welcome to my joke site</p>
                        <p>{setup}</p>
                        <p>{joke}</p>
                            <p>{punchline}</p>
                            
                            <button onClick={() => setSeed(seed+1)}>New Joke</button>

                            
                    </>
                )}
            </div>
        </div>
    );
}

function refreshPage() { window.location.reload() }











export { JokeAPI }