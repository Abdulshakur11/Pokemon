JSON.parse(JSON.stringify(pokemons));
// console.log(pokemons);

var elCardsWrapper = $_(".js-cards-wrapper");

pokemons.forEach(function (pokemon) {
  var newLi = createElement("li", "pokemon-item", "");
  var newImg = createElement("img", "item-img", "");

  newImg.setAttribute("src", pokemon.img);

  var newElP = createElement('p', 'item-title', pokemon.name,);
  var newElType = createElement('p', 'item-type', pokemon.type);

  elCardsWrapper.appendChild(newLi);
  newLi.appendChild(newImg);
  newLi.appendChild(newElP);
  newLi.appendChild(newElType);
})