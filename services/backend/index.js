import { getJoke } from "@nx-test/jokes";



async function handler() {
    const joke = await getJoke();
    return {
        statusCode: 200,
        body: JSON.stringify(joke)
    }
}

module.exports.handler = handler;