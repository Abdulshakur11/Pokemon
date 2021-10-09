var elCardsWrapper = $_(".js-cards-wrapper");
var elForm = $_(".form");
var elSearchInput = $_(".search-input-js");
var elPokemonTemlate = $_("#pokemon-card-temlate").content;


var createPokemonElenemt = function (pokemon) {
  var newPokemon = elPokemonTemlate.cloneNode(true);
  $_(".item-img", newPokemon).src = pokemon.img;
  $_(".item-title", newPokemon).textContent = pokemon.name;
  $_(".item-type", newPokemon).textContent = pokemon.type;

  return newPokemon;
};

// =========== RENDER POKEMONS =============
var renderPokemons = (pokemons) => {
  elCardsWrapper.innerHTML = "";
  var searchResultFragment = document.createDocumentFragment();

  pokemons.forEach(function (pokemon) {
    searchResultFragment.appendChild(createPokemonElenemt(pokemon));
  });
  elCardsWrapper.appendChild(searchResultFragment);
}

renderPokemons(pokemons);

// ========== SEARCH FUNCTION ============

var searchForPokemn = function (evt) {
  evt.preventDefault();
  var searchQuery = new RegExp(elSearchInput.value.trim(), "gi");

  var filterPokemon = pokemons.filter(function (pokemon) {
    return pokemon.name.match(searchQuery);
  });
  renderPokemons(filterPokemon);
}

elForm.addEventListener("input", searchForPokemn);