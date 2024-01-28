import "./style.css";
import { renderPoke } from "./render.js";

document.querySelector("#app").innerHTML = `
<h1 id="title">Poke<span>Dex</span></h1>
<p id="selectTitle">Select a Pokémon 🦅</p>
`;

const main = async () => {
  await renderPoke();
};

main();
