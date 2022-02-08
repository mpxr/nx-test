

import 'isomorphic-fetch'

function getJoke() {

    return fetch('https://icanhazdadjoke.com/', { headers: { 'Accept': 'application/json' } })
        .then((response) => response.json());        
}

function setJoke(joke) {
    console.log(joke);
}

export { getJoke, setJoke }
