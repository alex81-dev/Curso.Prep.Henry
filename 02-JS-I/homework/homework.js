// En estas primeras 6 preguntas, reemplaza `null` por la respuesta

// Crea una variable "string", puede contener lo que quieras:
const nuevaString = 'Hola mundo';

// Crea una variable numérica, puede ser cualquier número:
const nuevoNum = 8;

// Crea una variable booleana:
const nuevoBool = true;

// Resuelve el siguiente problema matemático:
const nuevaResta = 10 - 5 === 5;

// Resuelve el siguiente problema matemático:
const nuevaMultiplicacion = 10 * 4 === 40 ;

// Resuelve el siguiente problema matemático:
const nuevoModulo = 21 % 5 === 1;


// En los próximos 22 problemas, deberás completar la función.
// Todo tu código irá dentro de las llaves de la función.
// Asegúrate que usas "return" cuando la consola te lo pida.
// Pista: "console.log()" NO fucionará.
// No cambies los nombres de las funciones.

function devolverString(str) {
  // "Return" la string provista: str
  // Tu código:
  return str;
}

devolverString('Probando funciones');


function suma(x, y) {
  // "x" e "y" son números
  // Suma "x" e "y" juntos y devuelve el valor
  // Tu código:
  let resultSuma = x + y;
  return resultSuma;
}

suma(4, 3);


function resta(x, y) {
  // Resta "y" de "x" y devuelve el valor
  // Tu código:
  let resultResta = x - y;
  return resultResta;
}

resta(21, 5);


function multiplica(x, y) {
  // Multiplica "x" por "y" y devuelve el valor
  // Tu código:
  let resultMultipica = x * y;
  return resultMultipica;
}

multiplica(5, 4);


function divide(x, y) {
  // Divide "x" entre "y" y devuelve el valor
  // Tu código:
  let resultDivide = x / y;
  return resultDivide;
}

divide(49, 7);


function sonIguales(x, y) {
  // Devuelve "true" si "x" e "y" son iguales
  // De lo contrario, devuelve "false"
  // Tu código:
  if (x === y) {
    return true;
  } else {
    return false;
  }
}

sonIguales(2, 2);


function tienenMismaLongitud(str1, str2) {
  // Devuelve "true" si las dos strings tienen la misma longitud
  // De lo contrario, devuelve "false"
  // Tu código:
  let chain1 = str1.length;
  let chain2 = str2.length;
  if (chain1 === chain2) {
    return true;
  } else {
    return false;
  }
}

tienenMismaLongitud('Pao', 'Gus');


function menosQueNoventa(num) {
  // Devuelve "true" si el argumento de la función "num" es menor que noventa
  // De lo contrario, devuelve "false"
  // Tu código:
  let upperThreshold = 90
  if (num < upperThreshold) {
    return true;
  } else {
    return false;
  }
}

menosQueNoventa(43);


function mayorQueCincuenta(num) {
  // Devuelve "true" si el argumento de la función "num" es mayor que cincuenta
  // De lo contrario, devuelve "false"
  // Tu código:
  let lowerThreshold = 50
  if (num > lowerThreshold) {
    return true;
  } else {
    return false;
  }
}

mayorQueCincuenta(55);


function obtenerResto(x, y) {
  // Obten el resto de la división de "x" entre "y"
  // Tu código:
  let resultModule = x % y;
  return resultModule;
}

obtenerResto(39, 7);


function esPar(num) {
  // Devuelve "true" si "num" es par
  // De lo contrario, devuelve "false"
  // Tu código:
  let checkingPair = num % 2
  if(checkingPair === 0){
    return true;
  } else {
    return false;
  }
}

esPar(44);


function esImpar(num) {
  // Devuelve "true" si "num" es impar
  // De lo contrario, devuelve "false"
  // Tu código:
  let checkingOdd = num % 2
  if(checkingOdd != 0){
    return true;
  } else {
    return false;
  }
}

esImpar(33);


function elevarAlCuadrado(num) {
  // Devuelve el valor de "num" elevado al cuadrado
  // ojo: No es raiz cuadrada!
  // Tu código:
  let potenciaCuadradaOpc1 = Math.pow(num, 2);
  return potenciaCuadradaOpc1;
  // let potenciaCuadradaOpc2 = num * num;
  // return potenciaCuadradaOpc2;
}

elevarAlCuadrado(9);


function elevarAlCubo(num) {
  // Devuelve el valor de "num" elevado al cubo
  // Tu código:
  let potenciaCubicaOpc1 = Math.pow(num, 3);
  return potenciaCubicaOpc1;
  // let potenciaCubicaOpc2 = num * num * num;
  // return potenciaCubicaOpc2;
}

elevarAlCubo(3);


function elevar(num, exponent) {
  // Devuelve el valor de "num" elevado al exponente dado en "exponent"
  // Tu código:
  let potenciaXOpc1 = Math.pow(num, exponent);
  return potenciaXOpc1;
}

elevar(2, 3);


function redondearNumero(num) {
  // Redondea "num" al entero más próximo y devuélvelo
  // Tu código:
  let roundCloser = Math.round(num);
  return roundCloser;
}

redondearNumero(4.5);


function redondearHaciaArriba(num) {
  // Redondea "num" hacia arriba (al próximo entero) y devuélvelo
  // Tu código:
  let upCloser = Math.ceil(num);
  return upCloser;
}

redondearHaciaArriba(9.8);


function numeroRandom() {
  //Generar un número al azar entre 0 y 1 y devolverlo
  //Pista: investigá qué hace el método Math.random()
  let randomNumber = Math.random();
  return randomNumber;
}

numeroRandom();


function esPositivo(numero) {
  //La función va a recibir un entero. Devuelve como resultado una cadena de texto que indica si el número es positivo o negativo. 
  //Si el número es positivo, devolver ---> "Es positivo"
  //Si el número es negativo, devolver ---> "Es negativo"
  //Si el número es 0, devuelve false
  var notification;
  if (numero > 0){
    notification = 'Es positivo';
  } else if (numero < 0){
  console.log(notification);
    notification = 'Es negativo';
  } else {
  console.log(notification);
    notification = false;
  }
  return notification;
}

esPositivo(1);


function agregarSimboloExclamacion(str) {
  // Agrega un símbolo de exclamación al final de la string "str" y devuelve una nueva string
  // Ejemplo: "hello world" pasaría a ser "hello world!"
  // Tu código:
  let addSymbolToString = str;
  let newString = addSymbolToString + "!";
  return newString;
}

agregarSimboloExclamacion('Hello world');


function combinarNombres(nombre, apellido) {
  // Devuelve "nombre" y "apellido" combinados en una string y separados por un espacio.
  // Ejemplo: "Soy", "Henry" -> "Soy Henry"
  // Tu código:
  let combineStrings = nombre + ' ' + apellido;
  return combineStrings;
}

combinarNombres('Alex', 'Leon');


function obtenerSaludo(nombre) {
  // Toma la string "nombre" y concatena otras string en la cadena para que tome la siguiente forma:
  // "Martin" -> "Hola Martin!"
  // Tu código:
  let greeting = "Hola " + nombre + '!';
  return greeting;
}

obtenerSaludo('Henry');


function obtenerAreaRectangulo(alto, ancho) {
  // Retornar el area de un rectángulo teniendo su altura y ancho
  // Tu código:
  let areaRectangulo = alto * ancho;
  return areaRectangulo;
}

obtenerAreaRectangulo(10, 20);


function retornarPerimetro(lado){
  // Escibe una función a la cual reciba el valor del lado de un cuadrado y retorne su perímetro.
  // Tu código:
  let perimetroCuadrado = lado * 4;
  return perimetroCuadrado;
}

retornarPerimetro(2);


function areaDelTriangulo(base, altura){
  // Desarrolle una función que calcule el área de un triángulo.
  // Tu código:
  let areaTriangulo = (base * altura) / 2;
  return areaTriangulo;
}

areaDelTriangulo(5, 10);


function deEuroAdolar(euro){
  // Supongamos que 1 euro equivale a 1.20 dólares. Escribe un programa que pida al usuario un número de euros y calcule el cambio en dólares.
  // Tu código:
  let exchangeDolarRate = 1.20;
  let convertion = euro * exchangeDolarRate;
  let exchange = convertion;
  return exchange;
}

var invokeDeEuroAdolar = window.prompt('Ingrese la cantidad de euros que desea convertir a dolares');

deEuroAdolar(invokeDeEuroAdolar);


function esVocal(letra){
  // Escribe una función que reciba una letra y, si es una vocal, muestre el mensaje “Es vocal”. 
  // Verificar si el usuario ingresó un string de más de un carácter y, en ese caso, informarle 
  // que no se puede procesar el dato mediante el mensaje "Dato incorrecto".
  // Tu código:
  var message;
  if(letra.length != 1){
    message = 'Dato incorrecto';
  } else {
    switch(letra){
      case 'a':
        message = 'Es vocal';
        break;
      case 'e':
        message = 'Es vocal';
        break;
      case 'i':
        message = 'Es vocal';
        break;
      case 'o':
        message = 'Es vocal';
        break;
      case 'u':
        message = 'Es vocal';
        break;
      default:
        message = 'La letra ingresada no es ninguna vocal';
    }
  }
  return message;
}

esVocal('a');



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  nuevaString,
  nuevoNum,
  nuevoBool,
  nuevaResta,
  nuevaMultiplicacion,
  nuevoModulo,
  devolverString,
  tienenMismaLongitud,
  sonIguales,
  menosQueNoventa,
  mayorQueCincuenta,
  suma,
  resta,
  divide,
  multiplica,
  obtenerResto,
  esPar,
  esImpar,
  elevarAlCuadrado,
  elevarAlCubo,
  elevar,
  redondearNumero,
  redondearHaciaArriba,
  numeroRandom,
  esPositivo,
  agregarSimboloExclamacion,
  combinarNombres,
  obtenerSaludo,
  obtenerAreaRectangulo,
  retornarPerimetro,
  areaDelTriangulo,
  deEuroAdolar,
  esVocal,
};
