const pokedexElement = document.getElementById("pokedex");

let results = [];

const limit = 20
let offset = 0

function getIDFromPokemon(pokemon) {

    return pokemon.url.replace(
        "https://pokeapi.co/api/v2/pokemon/",
        ""
        ).replace("/", "");
        
    }





function createImageCol(pokemon) {
    const id = getIDFromPokemon(pokemon)

    const imageCol = document.createElement("div");
    imageCol.classList.add("col");

    const imgElement = document.createElement("img");
    let url = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png'
    imgElement.src = url;
    imgElement.height = 100;
    imgElement.width = 100;

    imageCol.appendChild(imgElement);
    return imageCol;
}

function drawUI() {
    results.forEach((pokemon) => {
        const container = document.createElement("div");
        container.classList.add("row");

        const imageCol = createImageCol(pokemon)
        const nameCol = document.createElement("div");
        nameCol.classList.add("col");
        const nameElement = document.createElement("p");
        nameElement.innerText = pokemon["name"];

        nameCol.append(nameElement);
        container.appendChild(nameCol);
        container.appendChild(imageCol);
        pokedexElement.appendChild(container)
    });
}

fetch("https://pokeapi.co/api/v2/pokemon")
    .then((response) => {
        return response.json();
    })
    .then((json) => {
        console.log(json);
        results = json["results"];
        drawUI()
    })
    .catch((error) => {
        console.log(error);
    })