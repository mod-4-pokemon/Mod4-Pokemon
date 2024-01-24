import fetchData from "./utils";
import { selectPokemon } from "./selectPokemon.js";

 

export const renderPoke = async () => {
  const mainDiv = document.querySelector("#app");
  const pokeContainer = document.createElement("div");
  pokeContainer.id = "pokeContainer";

  mainDiv.append(pokeContainer);

  const allPoke = await fetchData(
    "https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0"
  );
  const results = allPoke[0].results;

  results.forEach(async (poke) => {
    const pokeName = await fetchData(
      `https://pokeapi.co/api/v2/pokemon/${poke.name}`
    );
    const pokeDiv = document.createElement("div");
    pokeDiv.className = poke.name
    const pokeP = document.createElement("p");
    pokeP.textContent = poke.name;
    pokeDiv.append(pokeP);
    pokeContainer.append(pokeDiv);
    const img = document.createElement("img");

    img.src = pokeName[0].sprites.front_default;


    pokeDiv.append(img);
    const toggleModalDisplay = () => {
      let modal = document.querySelector('#modal');
      console.log(modal);
    
      let computedStyle = window.getComputedStyle(modal);
    
      if (computedStyle.getPropertyValue('display') === "none") {
        modal.style.display = "block";
      } else {
        modal.style.display = "none";
      }
    }

   pokeDiv.addEventListener('click', async (e) => {
    await selectPokemon(poke.name)
    toggleModalDisplay()
    })
  });
};


