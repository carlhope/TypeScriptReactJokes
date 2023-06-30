import React from "react";

class Jokes extends React.Component
{
    async Joker() {
        const response = await fetch("https://v2.jokeapi.dev/joke/Any?format=json");
        const jsonData = await response.json();
        console.log(jsonData);
    }


        render()
        {
            return <div className="test">
                <h1>hello</h1>
            </div>

        }


    
}



export {Jokes,  }