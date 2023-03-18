const params = new URLSearchParams(document.location.search);
const name = params.get("name");

fetch (`https://pokeapi.co/api/v2/pokemon/${name}`)
.then((response) => response.json())
.then((pokemonData) => {
document.querySelector("body").innerHTML += `

<figure>
<h1>${pokemonData.name}</h1>
            <img src="${pokemonData.sprites.front_default}" alt="${pokemonData.name}">
            <ul>
                <li>Types: ${pokemonData.type}</li>
                <li>Weight: ${pokemonData.weight}</li>
                <li>Height: ${pokemonData.height}</li>
                <li>Base Experience: ${pokemonData.base_experience}</li>
                <li>Generation introduced:${pokemonData.generation}</li>
            </ul>
`;

});