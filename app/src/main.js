import './style.css'
import fetchData from './utils.js'
import { selectPokemon } from './selectPokemon.js'
//import name of selected pokemon

selectPokemon('pikachu')
// console.log( await fetchData("https://pokeapi.co/api/v2/pokemon/"))

document.querySelector('#app').innerHTML = `
<p>Hello Pokemon </p>`