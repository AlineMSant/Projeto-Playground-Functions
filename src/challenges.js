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
function fizzBuzz(array) {
  let resultado = [];

  for(let index of array){  
    if(index%3 === 0 && index%5 === 0){
    resultado.push('fizzBuzz');
    }else if(index%3 === 0){
      resultado.push('fizz');
    }else if(index%5 === 0){
      resultado.push('buzz');
    }else if(index%3 !== 0 && index%5 !== 0){
      resultado.push('bug!');
    }
  }
  return resultado;
}

// Desafio 9
function encode(frase) {
  let array = frase.split('');
  let arrayResultado = [];

  for(let index of array){
    if(index !== 'a' && index !== 'e' && index !== 'i' && index !== 'o' && index !== 'u'){
      arrayResultado.push(index);
    }else if(index === 'a'){
      arrayResultado.push(1);
    }else if(index === 'e'){
      arrayResultado.push(2);
    }else if(index === 'i'){
      arrayResultado.push(3);
    }else if(index === 'o'){
      arrayResultado.push(4);
    }else if(index === 'u'){
      arrayResultado.push(5);
    }
  }
  return arrayResultado.join('');

}

function decode(frase) {
  let array = frase.split('');
  let arrayResultado = [];

  for(let index of array){
    if(index !== '1' && index !== '2' && index !== '3' && index !== '4' && index !== '5'){
      arrayResultado.push(index);
    }else if(index === '1'){
      arrayResultado.push('a');
    }else if(index === '2'){
      arrayResultado.push('e');
    }else if(index === '3'){
      arrayResultado.push('i');
    }else if(index === '4'){
      arrayResultado.push('o');
    }else if(index === '5'){
      arrayResultado.push('u');
    }
  }
  return arrayResultado.join('');
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
