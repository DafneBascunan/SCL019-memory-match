import App from './components/App.js';

document.getElementById('root').appendChild(App())

let nombre = window.prompt ("Ingresa tu nombre");

alert("Hola, " + nombre );

//Página 2 - sección Pikachu
document.getElementById('pikachu').addEventListener('click', pageTwo)
function pageTwo (){
    document.getElementById('header').style.display = "none";
    document.getElementById('welcome').style.display = "none";
    document.getElementById('pikachuSection').style.display = "block";
    document.getElementById('eeveeSection').style.display = "none";
    document.getElementById('game').style.display = "block";
    document.getElementById('footer').style.display = "block";
}

document.getElementById('eevee').addEventListener('click', pageThree)
function pageThree(){
    document.getElementById('header').style.display = "none";
    document.getElementById('welcome').style.display = "none";
    document.getElementById('pikachuSection').style.display = "none";
    document.getElementById('eeveeSection').style.display = "block";
    document.getElementById('game').style.display = "block";
    document.getElementById('footer').style.display = "block";
}
