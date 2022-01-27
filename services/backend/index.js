import { getJoke } from "@nx-test/jokes";

const joke = await getJoke();
console.log(joke);