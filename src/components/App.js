import pokemon from '../data/pokemon/pokemon.js';
console.log(pokemon);

const pokemonCard = pokemon.items;
const doubledCards = pokemonCard.concat(pokemonCard);

//Barajar las cartas, algoritmo de Fisher-Yates
let i = doubledCards.length, j, temp;
    while(--i > 0){
    j = Math.floor(Math.random() * (i+1))
    temp = doubledCards[j];
    doubledCards[j] = doubledCards[i];
    doubledCards[i] = temp;
    }

const App = () => {

  //Creación de container y sus atributos
  const cardContainer = document.createElement('div');
  cardContainer.setAttribute('class', 'container');
  cardContainer.setAttribute('id', 'cardContainer');
  
  //Creación de cartas y sus atributos
  for (let i = 0; i < doubledCards.length; i++) {
    const card = document.createElement('div');
    let imageFront = document.createElement('img'); 
    let imageBack = document.createElement('img'); //imagen pokemon//

    card.className = 'card';
    cardContainer.appendChild(card);

    imageFront.setAttribute('src','img/pokemonCard.png' );
    imageFront.setAttribute('class', 'imageFront'); 
    imageFront.setAttribute('alt', 'FrontCard');
    card.appendChild(imageFront);

    imageBack.setAttribute('src', doubledCards[i].image);
    imageBack.setAttribute('class', 'imageBack');
    imageBack.setAttribute('alt', doubledCards[i].id);
    card.setAttribute('id', doubledCards[i].id);
    card.appendChild(imageBack);

    //Darle la clase 'flip' al hacer click
    card.addEventListener('click', (e) => {
      card.classList.toggle('flip');
      checkCards(e);
    });

   }
   //Función match
   const checkCards = (e) => {
     console.log(e);
     const clickedCard = e.target;
     clickedCard.classList.add('flipped');
     const flippedCards = document.querySelectorAll('.flipped');
     const flip = document.querySelectorAll('.flip')
      if(flippedCards.length === 2){
       if(flippedCards[0].getAttribute('id') === flippedCards[1].getAttribute('id')){
         console.log('match');
         flippedCards.forEach(card => {
           card.classList.remove('flipped');
           card.style.pointerEvents = 'none';
         })
       } else{
         console.log('wrong');
         flippedCards.forEach((card) => {
          card.classList.remove('flipped');
          setTimeout(() => card.classList.remove('flip'), 1000);
         });
        }
        //Alerta al terminar de jugar
        if(flip.length === 18) {
          alert('📣¡FELICITACIONES! ¡ATRAPASTE A TODOS LOS POKÉMON! 🏆🎆🥇 Dato curioso: ¿Sabías que el personaje principal del animé "Pokémon", Satoshi (Ash, en EEUU y Latinoamérica) se llama igual que el creador de Pokémon, Satoshi Tajiri?')
     }
    }
   };

      return cardContainer;

  };
export default App;
