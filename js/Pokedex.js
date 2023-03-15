const searchInput = document.getElementById("searchInput");
      const searchButton = document.getElementById("searchButton");
      const pokemonList = document.getElementById("pokemonList");

      // Function to fetch a list of Pokemon from PokeAPI
      const fetchPokemon = async () => {
        const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151");
        const data = await response.json();
        return data.results;
      };

      // Function to fetch a specific Pokemon from PokeAPI
      const fetchPokemonByName = async (name) => {
        const response = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${name}`
        );
        const data = await response.json();
        return data;
      };

      // Function to display a list of Pokemon in the UI
      const displayPokemonList = (pokemon) => {
        pokemonList.innerHTML = "";
        pokemon.forEach((p) => {
          const li = document.createElement("li");
          const img = document.createElement("img");

          img.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-viii/icons/${p.url.split("/")[6]}.png`;
          img.alt = p.name;

          li.appendChild(img);
          li.innerText += p.name;
          pokemonList.appendChild(li);
        });
      };

      // Function to display a specific Pokemon in the UI
      const displayPokemon = (pokemon) => {
        pokemonList.innerHTML = "";
        const li = document.createElement("li");
        const img = document.createElement("img");
        const name = document.createElement("h2");
        const types = document.createElement("ul");

        img.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-viii/icons/${pokemon.id}.png`;
        img.alt = pokemon.name;

        name.innerText = pokemon.name;

        pokemon.types.forEach((t) => {
          const type = document.createElement("li");
          type.innerText = t.type.name;
          types.appendChild(type);
        });

        li.appendChild(img);
        li.appendChild(name);
        li.appendChild(types);
        pokemonList.appendChild(li);
      };

      // Event listener for search button
      searchButton.addEventListener("click", async () => {
        const name = searchInput.value.toLowerCase();
        const pokemon = await fetchPokemonByName(name);
        displayPokemon(pokemon);
      });

      // Initial display of all Pokemon
      fetchPokemon().then(displayPokemonList);