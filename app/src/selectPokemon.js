import fetchData from "./utils";



let modal = document.createElement('div')
let modalContent = document.createElement('div')
modal.id = 'modal'
modalContent.className = 'modal-content'



export const selectPokemon = async (pokeName) => {
    const pokemon = await fetchData(`https://pokeapi.co/api/v2/pokemon/${pokeName}`);

    const { abilities, moves, order, types, weight, sprites } = pokemon[0]

    // const img = document.createElement('img')
    // const abilityInfo = document.createElement('p')
    // const movesInfo = document.createElement('p')
    // const orderInfo = document.createElement('p')
    // const typeInfo = document.createElement('p')
    // const weightInfo = document.createElement('p')
    




    // img.src = sprites.front_default
    // abilityInfo.textContent = `Ability: ${abilities[0].ability.name}`
    // movesInfo.textContent = `Moves: ${moves.slice(0,3).map(x => x.move.name)}`
    // orderInfo.textContent = `Pokemon #${order}`
    // typeInfo.textContent = `Type: ${types[0].type.name}`
    // weightInfo.textContent = `Weight: ${weight}lbs`


   
 
    modal.append(modalContent)
    const container = document.getElementById("pokeContainer")
    container.prepend(modal)


    modalContent.innerHTML = `
    <img src=${sprites.front_default} />
    <p>Ability: ${abilities[0].ability.name}</p>
    <p>Moves: ${moves.slice(0, 3).map(x => x.move.name).join(', ')}</p>
    <p>Pokemon #${order}</p>
    <p>Type: ${types[0].type.name}</p>
    <p>Weight: ${weight} lbs</p>
  `;
  
};