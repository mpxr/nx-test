

import 'isomorphic-fetch'

function getJoke() {

    return fetch('https://icanhazdadjoke.com/', { headers: { 'Accept': 'application/json' } })
        .then((response) => response.json());        
}

export { getJoke }
