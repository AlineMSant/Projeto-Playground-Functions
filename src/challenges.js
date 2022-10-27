// Desafio 1
const girafa = true;
const elefante = true;
const macaco = false;

function compareTrue(valor1,valor2) {
  let resultado;
  if(valor1 === true && valor2 === true){
    resultado = true;
  }else if(valor1 === true && valor2 === false){
    resultado = false;
  }else if(valor1 === false && valor2 === true){
    resultado = false;
  }else if(valor1 === false && valor2 === false){
    resultado = false;
  }
  return resultado;
}

// Desafio 2
function calcArea(base,height) {
  return (base*height)/2;
}


// Desafio 3
function splitSentence(frase) {
  const words = frase.split(' ');
  return words;
}

// Desafio 4
function concatName(array) {
  let primeiro = array[0];
  let indiceUltimo = array.length -1;
  let ultimo = array[indiceUltimo];
  return ultimo + "," + " " + primeiro;
}

// Desafio 5
function footballPoints(wins,ties) {
  const winsPoints = 3;
  const tiesPoints = 1;
  const score = (wins*winsPoints) + (ties*tiesPoints);
  return score;
}

// Desafio 6
function highestCount() {
  // seu código aqui
}

// Desafio 7
function catAndMouse(mouse,cat1,cat2) {
  let distanciaCat1 = cat1 - mouse;
  let distanciaCat2 = cat2 - mouse;
  let resultado = '';

  if(distanciaCat1 <0){
    distanciaCat1 = Math.abs(distanciaCat1);
  }else if(distanciaCat2 <0){
    distanciaCat2 = Math.abs(distanciaCat2);
  }
  
  if(distanciaCat1 < distanciaCat2){
    resultado = 'cat1';
  }else if(distanciaCat2 < distanciaCat1){
    resultado = 'cat2';
  }else if (distanciaCat1 === distanciaCat2){
    resultado = 'os gatos trombam e o rato foge';
  }
  return resultado;
}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

// Desafio 10
function techList() {
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
  techList,
};
