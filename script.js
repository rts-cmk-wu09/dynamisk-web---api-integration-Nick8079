fetch("https://pokeapi.co/api/v2/pokemon")
.then((Response) => Response.json())
.then((data) => console.log(data.results))
