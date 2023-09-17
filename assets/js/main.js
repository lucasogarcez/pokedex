
const offset = 0;
const limit = 10;
const url = `https://pokemon.co/api/v2/pokemon?offset=${offset}&limit=${limit}`

/*
<li class="pokemon">
                <span class="number">#002</span>
                <span class="name">Ivysaur</span>

                <div class="detail">
                    <ol class="types">
                        <li class="type">Grass</li>
                        <li class="type">Poison</li>
                    </ol>

                    <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png" alt="Ivysaur image">
                </div>
            </li>
            <li class="pokemon">
                <span class="number">#003</span>
                <span class="name">Venusaur</span>

                <div class="detail">
                    <ol class="types">
                        <li class="type">Grass</li>
                        <li class="type">Poison</li>
                    </ol>

                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png" alt="Venusaur image">
                </div>
            </li>
            <li class="pokemon">
                <span class="number">#004</span>
                <span class="name">Charmander</span>

                <div class="detail">
                    <ol class="types">
                        <li class="type">Fire</li>
                    </ol>

                    <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png" alt="Charmander image">
                </div>
            </li>
            <li class="pokemon">
                <span class="number">#005</span>
                <span class="name">Charmeleon</span>

                <div class="detail">
                    <ol class="types">
                        <li class="type">Fire</li>
                    </ol>

                    <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png" alt="Charmeleon image">
                </div>
            </li>
            <li class="pokemon">
                <span class="number">#006</span>
                <span class="name">Charizard</span>

                <div class="detail">
                    <ol class="types">
                        <li class="type">Fire</li>
                        <li class="type">Flying</li>
                    </ol>

                    <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png" alt="Charizard image">
                </div>
            </li>
*/

function convertPokemonToLi(pokemon) {
    return `
        <li class="pokemon">
            <span class="number">#001</span>
            <span class="name">${pokemon.name}</span>

            <div class="detail">
                <ol class="types">
                    <li class="type">Grass</li>
                    <li class="type">Poison</li>
                </ol>

                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png" alt="${pokemon.name} image">
            </div>
        </li>
    `
}

const pokemonList = document.getElementById('pokemonList')

pokeApi.getPokemons().then((pokemons) => {
        for (let i = 0; i < pokemons.length; i++) {
            const element = pokemons[i];
            pokemonList.innerHTML += convertPokemonToLi(pokemon)
        }
    })
    