import './style.css'
import { selectPokemon } from './selectPokemon.js'
import { renderPoke } from "./render.js";
//import name of selected pokemon

// console.log( await fetchData("https://pokeapi.co/api/v2/pokemon/"))

document.querySelector('#app').innerHTML = `
<p>Choose a Pokemon 🥳</p>`

const main = () => {
    renderPoke();
};

main()


