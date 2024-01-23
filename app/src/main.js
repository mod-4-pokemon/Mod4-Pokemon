import './style.css'
import fetchData from './utils.js'



console.log( await fetchData("https://pokeapi.co/api/v2/pokemon/?limit=50&offset=0"))

const main = document.querySelector('#app')


