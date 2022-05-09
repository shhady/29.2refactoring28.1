// Instructions
// Lets do an simple ajax call with fetch using this url “https://
// api.jokes.one/jod”.
// Create a button that will fetch the joke of the day. Display
// to the screen the jokes title and the joke itself.

const btn = document.querySelector("button");
const div = document.createElement("div");
document.body.appendChild(div);

async function getJokes() {
  const res = await fetch("https://api.jokes.one/jod");
  const result = await res.json();
  console.log(result);
  let joke = result.contents.jokes[0].joke;
  document.querySelector("div").innerHTML = `<h2>${joke.title}</h2>
<p>${joke.text}</p>`;
}
// getJokes();

btn.addEventListener("click", () => {
  getJokes().catch((err) => console.log("An error occured: ", err));
});
