const destinationlist = document.querySelector(".destinationlist")

fetch("https://pokeapi.co/api/v2/pokemon?limit=151")
    .then((response) => response.json())
    .then((data) => {
        data.results.forEach((pokemon) => {
            destinationlist.innerHTML += `
    <figure id="">
        <a href="detail.html?name=${pokemon.name}">${pokemon.name}</a>
        
    </figure>
    `;
        });
    });