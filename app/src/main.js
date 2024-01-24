import './style.css'
import { selectPokemon } from './selectPokemon.js'
import { renderPoke } from "./render.js";
//import name of selected pokemon

selectPokemon('pikachu')
// console.log( await fetchData("https://pokeapi.co/api/v2/pokemon/"))

document.querySelector('#app').innerHTML = `
<p>Hello Pokemon </p>`



const main = () => {
  renderPoke();
};

main();

