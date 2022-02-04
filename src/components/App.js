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
    let imageBack = document.createElement('img'); //imagen pokemon//

    card.className = 'App';
    cardContainer.appendChild(card);

    imageFront.setAttribute("src","img/pokemonCard.png" );
    imageFront.setAttribute("class", "imageFront"); 
    imageFront.setAttribute("alt", "FrontCard");
    card.appendChild(imageFront);

    imageBack.setAttribute('src', doubledCards[i].image);
    imageBack.setAttribute("class", "imageBack");
    imageBack.setAttribute("alt", doubledCards[i].id);
    card.appendChild(imageBack);

    }
  
    return cardContainer
        
  };


export default App;
