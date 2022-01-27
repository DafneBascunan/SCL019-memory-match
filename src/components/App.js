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
console.log(pokemon)

let pokemonCard = pokemon.results;
let root = document.getElementById('root')

window.addEventListener('load', 

const App = () => {
  
  for (let i = 0; i <= 17; i++) {
    const card = document.createElement('div');
    let imageFront = document.createElement('img');
    let imageBack = document.createElement('img')

    card.className = 'App';
    card.textContent = 'Aquí deberían ir las cartas';

    root.appendChild(card)
    card.appendChild(imageFront)
    card.appendChild(imageBack)

  return card;
  }
};

export default App;
