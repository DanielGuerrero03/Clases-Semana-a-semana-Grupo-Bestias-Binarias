miFunción(8, 2); //Esto se lo conoce como hosting

function miFunción(a,b){
    //console.log("Sumamos: "+ (a + b));
    return a + b;
}

//Llamando la función
miFunción(5, 4);

let resultado = miFunción(6, 7);
console.log(resultado);

//Función tipo expresión
let sumar = function(a, b){
  console.log(arguments[0]) //Mestra el parametro de: a
  console.log(arguments[1]) //Mestra el parametro de: b
  console.log(arguments[2]) //Mestra el parametro de: c

  return a + b + arguments[2];
}
resultado = sumar(3, 2, 9);
console.log(resultado);

let respuesta = sumarTodo(5, 4, 13, 10, 9);
console.log(respuesta);
function sumarTodo(){
  let suma = 0;
  for (let i = 0; i < arguments.length; i++) {
    suma += arguments[i];
  }
  return suma;
}

// Declaramos una funcion de tipo expresion 1.3
let x = function(a, b){return a + b}; //necesita cierre con punto y coma
resultado = x(5, 6); // al llamarla se pone la variable entre parentesis
console.log(resultado);


// Funciones de tipo self y invoking
(function(a, b){
  console.log('Ejecutando la funcion: '+ (a+b));
})(9, 6);

/* ---------1.5------------------------------ */

//Tipos de datos en una función

console.log(typeof miFuncion);

function miFuncionDos(a, b) {
    console.log[arguments];
}

miFuncionDos(5, 7);

var miFuncionTexto = miFuncionDos.toString();
console.log(miFuncionTexto);

/* -------------1.5-------------------------- */
/* -------------1.6-------------------------- */
//Funciones Flecha

const sumarFuncionFlecha = (a, b) => a + b;
resultado = sumarFuncionFlecha(3, 7); //Asignamos el valor a una variable
console.log(resultado);

/* ---------------1.6------------------------ */



/* --------------------------------------- */

//Paso por valor

//Tipos primitivos
let k = 10;

function cambiarValor(a){ //Paso por valor
    a = 20;
}

cambiarValor(k);//10
console.log(k);

/* --------------------------------------- */

//Paso por referencia

const persona = {
    nombre: 'Juan',
    apellido: 'Lopez'
}

function cambiarValorObjeto(p1){ //Paso por referencia
    p1.nombre = 'Ignacio';
    p1.apellido = 'Perez';
}

cambiarValorObjeto( persona );
console.log( persona );
