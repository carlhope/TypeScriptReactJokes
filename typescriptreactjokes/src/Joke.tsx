import axios from "axios";
import React, { useState, useEffect } from "react";

function JokeAPI() {
    const [joke, setJoke] = useState(null);
    const [setup, setSetup] = useState(null);
    const [punchline, setPunchline] = useState(null);
    const [error, setError] = useState(false);
    const [state, setState] = useState('');
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
    }, []);
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
                        <p>{setup}</p>
                        <p>{joke}</p>
                            <p>{punchline}</p>
                            <button onClick={}>New Joke</button>

                            
                    </>
                )}
            </div>
        </div>
    );
}









export { JokeAPI }