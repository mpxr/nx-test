import { getJoke } from "@nx-test/jokes";

export async function handler() {

    const { joke } = await getJoke();

    console.log('hi');
    console.log(joke);

    return {
        statusCode: 200,
        body: JSON.stringify(joke)
    }
}