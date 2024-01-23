import fetchData from "./utils";

const renderPoke = async () => {
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
    pokeContainer.append(pokeDiv);
    const img = document.createElement("img");

    img.src = pokeName[0].sprites.front_default;

    pokeDiv.append(img);
  });
};

export default renderPoke;
