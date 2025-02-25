// PRIMERA SOLUCIÓN:

/* const getPokemons = async () => {
    try {
        const res = await fetch("https://pokeapi.co/api/v2/pokemon/?limit=151");
        const pokemons = await res.json();
        getRandomPokemon(pokemons.results);
    } catch (error) {
        alert("Unable to fetch pokemons");
    };
}

const getRandomPokemon = async (pokemons) => {
    const randomIndex = Math.floor(Math.random() * pokemons.length);
    const randomPokemon = pokemons[randomIndex];
    try {
        const res = await fetch(randomPokemon.url);
        const pokemonInfo = await res.json();
        renderRandomPokemon(pokemonInfo, randomPokemon);
    } catch (error) {
        alert("Unable to fetch random pokemon");
    }
}

const renderRandomPokemon = (pokemon, randomPokemon) => {
    const img = document.querySelector(".random-image");
    const h1 = document.createElement("h1");
    h1.innerText = randomPokemon.name.toUpperCase();
    document.body.appendChild(h1);
    img.src = pokemon.sprites.front_default;
    img.alt = randomPokemon.name;
};

window.addEventListener("DOMContentLoaded", () => {
    getPokemons();
}); */


// SEGUNDA SOLUCIÓN:

const getPokemon = async (pokemonId) => {
    try {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`);
        const data = await res.json();
        normalizePokemon(data);
    } catch (error) {
        alert("Unable to fetch pokemon");
    };
}

const getRandomPokemon = () => {
    const randomIndex = Math.floor(Math.random() * 150) +1;
    return randomIndex;
}

const normalizePokemon = (data) => {
    const pokemon = {
        name: data.name,
        image: data.sprites.front_default
    };
    printData(pokemon);
}

const printData = (data) => {
    const img = document.querySelector(".random-image");
    const h1 = document.createElement("h1");
    h1.innerText = data.name.toUpperCase();
    document.body.appendChild(h1);
    img.src = data.image;
    img.alt = data.name;
}

window.addEventListener("DOMContentLoaded", () => {
    getPokemon(getRandomPokemon());
});