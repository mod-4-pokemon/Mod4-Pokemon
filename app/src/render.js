import fetchData from "./utils";
import { selectPokemon } from "./selectPokemon.js";

// Function to render Pokémon based on search query
export const renderPoke = async (searchQuery = "") => {
  const mainDiv = document.querySelector("#app");

  // Create search input field
  const searchInput = document.createElement("input");
  searchInput.type = "text";
  searchInput.id = "searchInput";
  searchInput.placeholder = "Search Pokémon...";
  mainDiv.appendChild(searchInput);

  const pokeContainer = document.createElement("div");
  pokeContainer.id = "pokeContainer";
  mainDiv.appendChild(pokeContainer);

  // Fetch Pokémon data
  const allPoke = await fetchData(
    "https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0"
  );
  const results = await allPoke[0].results;

  // Function to render Pokémon based on search query
  const renderFilteredPoke = async (searchQuery) => {
    pokeContainer.innerHTML = ""; // Clear previous content

    // Filter Pokémon based on the search query
    const filteredResults = results.filter((poke) =>
      poke.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    // If no matching Pokémon found, display "Unknown Pokémon" message (IMPORTANT**)
    if (filteredResults.length === 0) {
      const unknownPokemonMessage = document.createElement("p");
      unknownPokemonMessage.textContent = "Unknown Pokémon";
      pokeContainer.appendChild(unknownPokemonMessage);
      return;
    }
    // Display filtered Pokémon
    filteredResults.forEach(async (poke) => {
      const pokeName = await fetchData(
        `https://pokeapi.co/api/v2/pokemon/${poke.name}`
      );
      const pokeDiv = document.createElement("div");
      pokeDiv.className = poke.name;
      const pokeP = document.createElement("p");
      pokeP.textContent = poke.name;
      pokeDiv.append(pokeP);
      pokeContainer.append(pokeDiv);
      const img = document.createElement("img");
      img.src = pokeName[0].sprites.front_default;
      pokeDiv.append(img);

      // Event listener to select Pokémon
      pokeDiv.addEventListener("click", async (e) => {
        await selectPokemon(poke.name);
        toggleModalDisplay();
        playPokemonSound(); // Play sound effect
      });
    });
  };

  // Render all Pokémon when the page first loads
  renderFilteredPoke(searchQuery);

  // Event listener for search input field
  searchInput.addEventListener("input", (event) => {
    const searchQuery = event.target.value.trim();
    renderFilteredPoke(searchQuery);
  });

  // Toggle modal display function
  const toggleModalDisplay = () => {
    let modal = document.querySelector("#modal");
    let computedStyle = window.getComputedStyle(modal);

    if (computedStyle.getPropertyValue("display") === "none") {
      modal.style.display = "block";
    } else {
      modal.style.display = "none";
    }
  };
};
