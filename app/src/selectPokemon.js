import fetchData from "./utils";

export const selectPokemon = async (pokeName) => {
    const pokemon = await fetchData(`https://pokeapi.co/api/v2/pokemon/${pokeName}`);

    const { abilities, moves, order, types, weight, sprites } = pokemon[0]
    console.log(sprites.front_default)

    const img = document.createElement('img')
    const abilityInfo = document.createElement('p')
    const movesInfo = document.createElement('p')
    const orderInfo = document.createElement('p')
    const typeInfo = document.createElement('p')
    const weightInfo = document.createElement('p')

    img.src = sprites.front_default
    abilityInfo.textContent = `Ability: ${abilities[0].ability.name}`
    movesInfo.textContent = `Moves: ${moves.slice(0,3).map(x => x.move.name)}`
    orderInfo.textContent = `Pokemon #${order}`
    typeInfo.textContent = `Type: ${types[0].type.name}`
    weightInfo.textContent = `Weight: ${weight}lbs`
    console.log(weightInfo)

    let modal = document.createElement('div')
    modal.append(img, abilityInfo, movesInfo, orderInfo, typeInfo, weightInfo)
};