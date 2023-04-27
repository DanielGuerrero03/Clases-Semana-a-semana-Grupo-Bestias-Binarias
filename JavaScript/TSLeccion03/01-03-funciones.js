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