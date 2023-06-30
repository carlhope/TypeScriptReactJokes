

class Jokes
{


    async Joker() {
        var oneLiner = "";
        var setup = "";
        var punchline = ""
        const response = await fetch("https://v2.jokeapi.dev/joke/Any?format=json");
        const jsonData = await response.json();
        console.log(jsonData);
        if (jsonData.type === "twopart") { setup = jsonData.setup; console.log(setup); punchline = jsonData.delivery; console.log(punchline); return setup }
        else { oneLiner = jsonData.joke; console.log(oneLiner); return oneLiner; }

}
        }



export {Jokes }