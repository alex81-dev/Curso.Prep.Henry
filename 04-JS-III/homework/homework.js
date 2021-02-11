// No cambies los nombres de las funciones.

function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un array
  // Tu código:
  const firstArrayElement = array[0];
  return firstArrayElement;

  // return array[0];
}


function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  // Tu código:
  const lastArrayElement = array[array.length - 1];
  return lastArrayElement;

  // return array[array.length - 1];
}


function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  // Tu código:
  const arraySize = array.length;
  return arraySize;

  // return array.length;
}


function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:
  // Cycle
  const increaseArray = [];
  for(let i = 0; i < array.length; i++){
    increaseArray.push(array[i] + 1);
  };
  return increaseArray;

  // Method
  // let increaseArray = array.map(function(item) {
  //   return item + 1;
  // });
  // return increaseArray;

  // Arrow function
  // let increaseArray = array.map(item => item + 1);
  // return increaseArray;
}


function agregarItemAlFinalDelArray(array, elemento) {
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:
  // Method
  const includeElementToArray = array;
  includeElementToArray.push(elemento);
  return includeElementToArray;
}


function agregarItemAlComienzoDelArray(array, elemento) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:
  // Method
  const newFirstArrayElement = array;
  newFirstArrayElement.unshift(elemento);
  return newFirstArrayElement;
}


function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:
  // Method
  const newStringUnited = palabras.join(' ');
  return newStringUnited;
}


function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:
  // Cycle and conditional
  for(let i = 0; i < array.length; i++){
    if(array[i] === elemento){
      return true;
    };
  };
  return false;

  // Method
  // const checkElement = array.find(function(item) {
  //   return item === elemento;
  // });
  // if(checkElement){
  //   return true;
  // } else {
  //   return false;
  // };

  // Arrow function
  // const checkElement = array.find(item => item === elemento);
  // if(checkElement){
  //   return true;
  // } else {
  //   return false;
  // };
}


function agregarNumeros(numeros) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:
  // Cycle
  let addingArrayNumbers = 0;
  for(let i = 0; i < numeros.length; i++){
    addingArrayNumbers += numeros[i];
  };
  return addingArrayNumbers;

  // Method
  // let addingArrayNumbers = numeros.reduce(function(preValue, actValue) {
  //  return preValue + actValue;
  // });
  // return addingArrayNumbers;

  // Arrow function
  // let addingArrayNumbers = numeros.reduce((preValue, actValue) => preValue + actValue);
  // return addingArrayNumbers;
}


function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:
  // Cycle
  let totalTest = 0;
  for(let i = 0; i < resultadosTest.length; i++){
    totalTest += resultadosTest[i];
  };
  return totalTest / resultadosTest.length;

  // Method
  // let totalTest = 0;
  // resultadosTest.forEach(addingItem);  
  // function addingItem(item) {
  //   totalTest += item;
  // };
  // return totalTest / resultadosTest.length;

  // Arrow function
  // let totalTest = 0;
  // resultadosTest.forEach(item => totalTest += item);
  // return totalTest / resultadosTest.length;
}


function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:
  // Cycle
  let greaterNumber = 0;
  for(let i = 0; i < numeros.length; i++){
    if(numeros[i] > greaterNumber){
      greaterNumber = numeros[i];
    };
  };
  return greaterNumber;
}


function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0. Si se pasa un argumento, simplemente devuélvelo
  // Tu código:
  // Cycle
  let totalMultiplication = 1;
  if(arguments.length < 1){
    return 0;
  } else {
    for(var i = 0; i < arguments.length; i++){
      totalMultiplication *= arguments[i];
    }
    return totalMultiplication;
  }
}


function cuentoElementos(arreglo) {
  // Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 19.
  // Tu código:
  // Cycle and conditional
  let counter = 0;
  for(let i = 0; i < arreglo.length; i++){
    if(arreglo[i] > 19){
      counter += 1;
    };
  };
  return counter;
}


function diaDeLaSemana(numeroDeDia) {
  // Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente. 
  // Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
  // si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario. 
  // Tu código:
  // Conditional
  if(numeroDeDia === 1 || numeroDeDia === 7){
    return 'Es fin de semana';
  } else if(numeroDeDia >= 2 && numeroDeDia <= 6){
    return 'Es dia Laboral';
  } else {
    return 'Ingresa un dia de la semana valido';
  };
}


function empiezaConNueve(n) {
  // Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero 
  // inicia con 9 y false en otro caso.
  // Tu código:
  // Conditional
  const checkingNumber = n.toString();
  if(checkingNumber[0] == 9){
    return true;
  } else {
    return false;
  };
}


function todosIguales(arreglo) {
  // Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
  // retornar true, caso contrario retornar false.
  // Tu código:
  // Cycle
  const baseCheckItem = arreglo[0];
  for(let i = 1; i < arreglo.length; i++){
    if(baseCheckItem !== arreglo[i]){
      return false;
    };
  };
  return true;
} 


function mesesDelAño(array) {
  // Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de 
  // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
  // Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
  // Tu código:
  // Cycles and conditional
  const monthsFound = [];
  let checkItems = [];
  let checkingMonths = ['Enero', 'Marzo', 'Noviembre'];  // Más adelante refactorizar para que sea un input customizable
  if(checkingMonths.length <= array.length){
    for(let i = 0; i < array.length; i++){
      let compareMonth = array[i];
      for(let j = 0; j < checkingMonths.length; j++){
        if(compareMonth === checkingMonths[j]){
          monthsFound.push(compareMonth);
        };
      };
    };
    checkingMonths.sort(); // Organizar el array
    checkItems = monthsFound.slice().sort(); // Saca una copia de los elementos del array para evitar asociaciones directas y los organiza en un nuevo array
    if(checkingMonths.length === checkItems.length && checkingMonths.every((elemento, i) => elemento === checkItems[i])){
      return monthsFound;
    } else {
      return 'No se encontraron los meses pedidos';
    };
  } else {
    return 'No se encontraron los meses pedidos';
  };
}


function mayorACien(array) {
  // La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
  // valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
  // Tu código:
  // Cycle and conditional
  const newArray = [];
  for(let i = 0; i < array.length; i++){
    if(array[i] > 100){
      newArray.push(array[i]);
    };
  };
  return newArray;
}


function breakStatement(numero) {
  // Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  // Guardar cada nuevo valor en un array. 
  // Devolver el array
  // Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y 
  // devolver: "Se interrumpió la ejecución"
  // Pista: usá el statement 'break'
  // Tu código:
  // Cycle, conditional and statement
  const newArray = [];
  let increaseNumberToInsert = numero;
  for(var i = 0; i < 10; i++){
    increaseNumberToInsert += 2;
    if(increaseNumberToInsert === i){
      break;
    } else {
      newArray.push(increaseNumberToInsert);
    };
  };
  if(i < 10){
    return 'Se interrumpió la ejecución';
  } else {
    return newArray;
  }
}


function continueStatement(numero) {
  // Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  // Guardar cada nuevo valor en un array.    
  // Devolver el array
  // Cuando el número de iteraciones alcance el valor 5, no se suma en ese caso y se continua con la siguiente iteración
  // Pista: usá el statement 'continue'
  // Tu código:
  // Cycle, conditional and statement
  const newArray = [];
  let increaseNumberToInsert = numero;
  for(var i = 0; i < 10; i++){
    if(i === 5){
      continue;
    } else {
      increaseNumberToInsert += 2;
      newArray.push(increaseNumberToInsert);
    };
  };
  return newArray;
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  multiplicarArgumentos,
  cuentoElementos,
  diaDeLaSemana,
  empiezaConNueve,
  todosIguales,
  mesesDelAño,
  mayorACien,
  breakStatement,
  continueStatement
};
