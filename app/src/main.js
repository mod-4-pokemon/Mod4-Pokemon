import './style.css'
import fetchData from './utils.js'



console.log( await fetchData("https://pokeapi.co/api/v2/pokemon/ditto"))

document.querySelector('#app').innerHTML = `
<p>Hello Pokemon </p>`