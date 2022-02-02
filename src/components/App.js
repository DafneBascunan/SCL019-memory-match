//
// Para incluir los diferentes sets de cartas podemos _importar_ el archivo
// JavasSript que contenga el `export` correspondiente...
//
// import pokemon from '../data/pokemon/pokemon.js';
// console.log(pokemon);
//
// O alternativamente podríamos cargar el JSON de forma asíncrona usando
// `fetch` en el momento que consideremos necesario.
//
// fetch('./data/pokemon/pokemon.json')
//   .then(resp => resp.json())
//   .then(console.log)
//   .catch(console.error);
//
import pokemon from "../data/pokemon/pokemon.js";
console.log(pokemon);

const pokemonCard = pokemon.items;
const doubledCards = pokemonCard.concat(pokemonCard);

let i = doubledCards.length, j, temp;
    while(--i > 0){
    j = Math.floor(Math.random() * (i+1))
    temp = doubledCards[j];
    doubledCards[j] = doubledCards[i];
    doubledCards[i] = temp;
    }

const App = () => {

  const cardContainer = document.createElement('div');
  cardContainer.setAttribute("class", "container");
  cardContainer.setAttribute("id", "cardContainer");
  
  for (let i = 0; i < doubledCards.length; i++) {
    const card = document.createElement('div');
    let imageFront = document.createElement('img');
    let imageBack = document.createElement('img');

    card.className = 'App';
    cardContainer.appendChild(card);

    imageBack.setAttribute("src","img/pokemonCard.png" );
    imageBack.setAttribute("class", "cards");
    imageBack.setAttribute("alt", "BackCard");
    imageBack.setAttribute("id", "imageBack");
    card.appendChild(imageBack);

    imageFront.setAttribute('src', doubledCards[i].image);
    imageFront.setAttribute("class", "cards");
    imageFront.setAttribute("alt", doubledCards[i].id);
    imageFront.setAttribute("id", "imageFront")
    card.appendChild(imageFront);

    }
  
    return cardContainer
        
  };


export default App;
