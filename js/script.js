fetch("https://pokeapi.co/api/v2/pokemon/?limit=12")
.then((Response) => Response.json())
.then((data) => console.log(data.results))
