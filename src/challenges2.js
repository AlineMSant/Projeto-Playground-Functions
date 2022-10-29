// Desafio 11
function generatePhoneNumber(array) {
  let retorno;
  let somaUm = 0;
  let somaDois = 0;
  let somaTres = 0;
  let somaQuatro = 0;
  let somaCinco = 0;
  let somaSeis = 0;
  let somaSete = 0;
  let somaOito = 0;
  let somaNove = 0;

if(array.length > 11 || array.length < 11){
  retorno = 'Array com tamanho incorreto.';
}else{
  retorno = `(${array[0]}${array[1]}) ${array[2]}${array[3]}${array[4]}${array[5]}${array[6]}-${array[7]}${array[8]}${array[9]}${array[10]}`
}

for(i=0; i<array.length; i=i+1){
  if(array[i] < 0 || array[i] > 9){
    retorno = 'não é possível gerar um número de telefone com esses valores';
  }
  if(array[i] < 0 || array[i] > 9 && array.length > 11){
  retorno = 'Array com tamanho incorreto.';
  }
  if(array[i] < 0 || array[i] > 9 && array.length < 11){
    retorno = 'não é possível gerar um número de telefone com esses valores';
  }
}


for(i=0; i<array.length; i=i+1){
  if(array[i] === 1){
    somaUm = somaUm + 1;
  }else if(array[i] === 2){
    somaDois = somaDois + 1;
  }else if(array[i] === 3){
    somaTres = somaTres + 1;
  }else if(array[i] === 4){
    somaQuatro = somaQuatro + 1;
  }else if(array[i] === 5){
    somaCinco = somaCinco + 1;
  }else if(array[i] === 6){
    somaSeis = somaSeis + 1;
  }else if(array[i] === 7){
    somaSete = somaSete + 1;
  }else if(array[i] === 8){
    somaOito = somaOito + 1;
  }else if(array[i] === 9){
    somaNove = somaNove + 1;
  }
}

if(somaUm >=3 || somaDois >= 3 || somaTres >= 3 || somaQuatro >= 3 || somaCinco >= 3 || somaSeis >= 3 || somaSete >=3 || somaOito>=3 || somaNove >= 3){
  retorno = 'não é possível gerar um número de telefone com esses valores';
}

return retorno;
}

console.log(generatePhoneNumber([0,2,3,4,4,2,7,8,9,9,4]));

// Desafio 12
function triangleCheck(lineA,lineB,lineC) {
  let subAB = lineA - lineB;
  let subAC = lineA - lineC;
  let subBA = lineB - lineA;
  let subBC = lineB - lineC;
  let subCB = lineC - lineB;
  let subCA = lineC - lineB;

  if(subAB < 0){
    subAB = Math.abs(subAB);  
  }
  if(subAC < 0){
    subAC = Math.abs(subAC);
  }
  if(subBA < 0){
    subBA = Math.abs(subBA);
  }
  if(subBC < 0){
    subBC = Math.abs(subBC);
  }
  if(subCB < 0){
    subCB = Math.abs(subCB);
  }
  if(subCA < 0){
    subCA = Math.abs(subCA);
  }

  let resposta;

  switch (lineA,lineB,lineC) {
    case (lineA < (lineB + lineC) || lineB < (lineC + lineA) || lineC < (lineB + lineA)):
    case (lineA < (lineB + lineC) && lineA > subBC):
      resposta = true;
      break;
    case  (lineA < (lineB + lineC) || lineB < (lineC + lineA) || lineC < (lineB + lineA)):
    case (lineA < (lineC + lineB) && lineA > subCB):
      resposta = true;
      break;
    case (lineA < (lineB + lineC) || lineB < (lineC + lineA) || lineC < (lineB + lineA)):
    case (lineB < (lineA + lineC) && lineB > subAC):
      resposta = true;
      break;
    case (lineA < (lineB + lineC) || lineB < (lineC + lineA) || lineC < (lineB + lineA)):
    case (lineB < (lineC + lineA) && lineB > subCA):
      resposta = true;
      break;
    case  (lineA < (lineB + lineC) || lineB < (lineC + lineA) || lineC < (lineB + lineA)):
    case (lineC < (lineB + lineA) && lineC > subBA):
      resposta = true;
      break;
    case  (lineA < (lineB + lineC) || lineB < (lineC + lineA) || lineC < (lineB + lineA)):
    case (lineC < (lineA + lineB) && lineC > subAB):
      resposta = true;
      break;
  default:
    resposta = false;
  }
  return resposta;
}

// Desafio 13
function hydrate(string) {
  let array = string.split('');
  let arrayNumerosString = [];
  let arrayNumeros = [];
  let soma = 0;

  for(i = 0; i<array.length;i=i+1){
    if(array[i] === "1" || array[i] === "2" || array[i] === "3" || array[i] === "4" || array[i] === "5" || array[i] === "6" || array[i] === "7" || array[i] === "8" || array[i] === "9"){
      arrayNumerosString.push(array[i]);
    }
  }

  for(i=0; i<arrayNumerosString.length; i=i+1){
    arrayNumeros.push(parseInt(arrayNumerosString[i]));
  }

  for(i=0; i<arrayNumeros.length; i=i+1){
    soma = soma + arrayNumeros[i];
  }

  let frase = "";

  if(soma === 1){
    frase = `${soma} copo de água`;
  }else if(soma > 1){
    frase = `${soma} copos de água`;
  }
  return frase;
}


module.exports = {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
};
