import fetchData from "./utils";

let modal = document.createElement("div");
let modalContent = document.createElement("div");
modal.id = "modal";
modalContent.className = "modal-content";

let exitButton = document.createElement("button");
exitButton.id = "closeModalButton";

export const selectPokemon = async (pokeName) => {
  const pokemon = await fetchData(
    `https://pokeapi.co/api/v2/pokemon/${pokeName}`
  );

  const { abilities, moves, order, types, weight, sprites, name } = pokemon[0];

  modal.append(modalContent);
  const container = document.getElementById("pokeContainer");
  container.prepend(modal);


  modalContent.innerHTML = `
    <img src=${sprites.front_default} />
    <p class="modalNameText">${name}</p>
    <p>Ability: ${abilities[0].ability.name}</p>
    <p>Moves: ${moves
      .slice(0, 3)
      .map((x) => x.move.name)
      .join(", ")}</p>
    <p>Type: ${types[0].type.name}</p>
    <p>Weight: ${weight} lbs</p>
  `;

  modalContent.prepend(exitButton);

  exitButton.innerHTML = `&times;`

  // Add event listener to the exit button
  exitButton.addEventListener('click', function() {
    modal.style.display = 'none'; // Hide the modal when the button is clicked
  });


};
