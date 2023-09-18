const pokemonList = document.getElementById('pokemonList')
const loadMore = document.getElementById('loadMore')
const maxRecords = 231;
const limit = 10;
let offset = 0;

function loadPokemonItems(offset, limit) {
    pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
        pokemonList.innerHTML += pokemons.map((pokemon) => `
        <li class="pokemon ${pokemon.type}">
                    <span class="number">#${pokemon.number}</span>
                    <span class="name">${pokemon.name}</span>
        
                    <div class="detail">
                        <ol class="types">
                            ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
                        </ol>
        
                        <img src="${pokemon.photo}" alt="${pokemon.name} image">
                    </div>
                </li>
            `).join('')

    })
}

loadPokemonItems(offset, limit)

loadMore.addEventListener('click', () => {
    offset += limit
    const qtdRecordWithNextPage = offset + limit
    
    if(qtdRecordWithNextPage >= maxRecords) {
        const newLimit = maxRecords - offset
        loadPokemonItems(offset, newLimit)

        loadMore.parentElement.removeChild(loadMore)
    }else{
        loadPokemonItems(offset, limit)
    }
})

    /* FUNÇÃO MAP COMPLETA
    const listItems = []
        for (let i = 0; i < pokemons.length; i++) {
            const pokemon = pokemons[i];
            listItems.push(convertPokemonToLi(pokemon))
        }

        console.log(listItems)
    */
