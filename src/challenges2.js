// Desafio 11
function generatePhoneNumber(array) {
  let retorno;

if(array.length > 11 || array.length < 11){
  retorno = 'Array com tamanho incorreto.';
}else{
  retorno = `(${array[0]}${array[1]}) ${array[2]}${array[3]}${array[4]}${array[5]}${array[6]}-${array[7]}${array[8]}${array[9]}${array[10]}`
}

for(i=0; i<array.length; i=i+1){
  if(array[i] < 0 || array[i] > 9){
    retorno = 'não é possível gerar um número de telefone com esses valores';
  }
}
return retorno;
}

// Desafio 12
function triangleCheck() {
  // seu código aqui
}

// Desafio 13
function hydrate() {
  // seu código aqui
}


module.exports = {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
};
