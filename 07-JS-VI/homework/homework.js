// Do not change any of the function names

function palindromo(frase) {
  // Definir una función que determine si la cadena de texto que se le pasa como parámetro es un palíndromo, 
  // es decir, si se lee de la misma forma desde la izquierda y desde la derecha. 
  // Ejemplo de palíndromo complejo: "La ruta nos aporto otro paso natural" ---> Devuelve true
  // Tu código:
  // Cycle and conditional
  let leerIzqADer = '';
  const eliminaEspacio = frase.toLowerCase();
  for(var i = 0; i < eliminaEspacio.length; i++){
    if(eliminaEspacio[i] !== ' '){
      leerIzqADer += eliminaEspacio[i];
    }
  }
  const leerDerAIzq = leerIzqADer.split('').reverse().join('');
  return leerIzqADer === leerDerAIzq;

  // Methods
  // let leerIzqADer = frase.toLowerCase().replace(/ /g, '');
  // const leerDerAIzq = leerIzqADer.split('').reverse().join('');
  // return leerIzqADer === leerDerAIzq;
}

palindromo('La ruta nos aporto otro paso natural');


function mayuscula(nombre) {
  // La función recibe un nombre y debe devolver el mismo que recibe pero con su primer letra en mayúscula
  // ej: Recibe "mario" ----> Devuelve "Mario"
  // Tu código:
  // Concatenating
  const upperInitial = nombre.charAt(0).toUpperCase() + nombre.slice(1);
  return upperInitial;

  // Direct
  // return nombre.charAt(0).toUpperCase() + nombre.slice(1);


  // Template string
  // const upperInitial = `${nombre[0].toUpperCase()}${nombre.slice(1)}`;
  // return upperInitial;

  // Direct
  // return `${nombre[0].toUpperCase()}${nombre.slice(1)}`;
}


function invocarCallback(cb) {
  // Invoca al callback `cb`
  // Tu código:
  cb();
}


function operacionMatematica(n1, n2, cb) {
  // Vamos a recibir una función que realiza una operación matemática como callback junto con dos números.
  // Devolver el callback pasándole como argumentos los números recibidos.
  // Tu código:
  return cb(n1, n2);
}


function sumarArray(numeros, cb) {
  // Suma todos los números enteros (int/integers) de un array ("numeros")
  // Pasa el resultado a `cb`
  // No es necesario devolver nada
  // Tu código:
  // Cycle
  let total = 0;
  for(let i = 0; i < numeros.length; i++){
    total += numeros[i];
  };
  cb(total);

  // Method
  // const total = numeros.reduce(function(acc, curVal) {
  //   return acc + curVal;
  // });
  // cb(total);

  // Arrow function
  // const total = numeros.reduce((acc, curVal) => acc + curVal);
  // cb(total);
}


function forEach(array, cb) {
  // Itera sobre la matriz "array" y pasa los valores al callback uno por uno
  // Pista: Estarás invocando a `cb` varias veces (una por cada valor en la matriz)
  // Tu código:
  // Cycle
  for(let i = 0; i < array.length; i++){
    cb(array[i]);
  };

  // Method
  // array.forEach(function(element) {
  //   return cb(element);
  // });

  // Arrow function
  // array.forEach(element => cb(element));
}


function map(array, cb) {
  // Crea un nuevo array
  // Itera sobre cada valor en "array", pásalo a `cb` y luego ubicar el valor devuelto por `cb` en un nuevo array
  // El nuevo array debe tener la misma longitud que el array del argumento
  // Tu código:
  // Cycle
  let newArrayForCb = [];
  for(let i = 0; i < array.length; i++){
    newArrayForCb.push(cb(array[i]));
    newArrayForCb[i] = cb(array[i]);
  };
  return newArrayForCb;

  // Method
  // let newArrayForCb = array.map(function(element) {
  //   return cb(element);
  // });
  // return newArrayForCb;

  // Arrow function
  // let newArrayForCb = array.map(element => cb(element));
  // return newArrayForCb;
}


function filter(array) {
  // Filtrar todos los elementos del array que comiencen con la letra "a".
  // Devolver un nuevo array con los elementos que cumplen la condición
  // Tu código:
  // Cycle, conditional and method
  const newArrayFirstALetter = [];
  for(let i = 0; i < array.length; i++){
    if(array[i][0].toLowerCase() === 'a' || array[i][0].toLowerCase() === 'á'){
      newArrayFirstALetter.push(array[i]);
    };
  };
  return newArrayFirstALetter;

  // Method
  // const newArrayFirstALetter = array.filter(function(element) {
  //   return element[0] === 'a' || element[0] === 'á';
  // });
  // return newArrayFirstALetter;

  // Arrow function
  // const newArrayFirstALetter = array.filter(element => element[0].toLowerCase() === 'a' || element[0].toLowerCase() === 'á');
  // return newArrayFirstALetter;
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  mayuscula,
  invocarCallback,
  operacionMatematica,
  sumarArray,
  forEach,
  map,
  filter
};
