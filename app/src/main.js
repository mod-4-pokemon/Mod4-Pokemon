import './style.css'
import { selectPokemon } from './selectPokemon.js'
import { renderPoke } from "./render.js";
//import name of selected pokemon

// console.log( await fetchData("https://pokeapi.co/api/v2/pokemon/"))

document.querySelector('#app').innerHTML = `
<h1 id="title">Poke<span>Dex</span></h1>
<p>Select a Pokémon 🦅</p>
`


const main = async () => {
   await renderPoke();
   
};

main()


