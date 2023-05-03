let x = 10; //variable de tipo primitiva
console.log(x.length); 
console.log('Tipos Primitivos')
//Objeto
let persona = {
    nombre: 'Carlos',
    apellido: 'Gil',
    email: 'cgil@gmail.com',
    edad: 30,
    nombreCompleto: function(){ //metodo o funcion en JavaScript
        return this.nombre+' '+this.apellido;
    }
    
}

console.log(persona.nombre);
console.log(persona.apellido);
console.log(persona.email);
console.log(persona.edad);
console.log(persona);
console.log(persona.nombreCompleto());
console.log('Ejecutando con un objeto');


console.log('Creamos un nuevo objeto');


console.log('usamos el ciclo for in')
////
console.log('cambiamos y eliminamos un error');
persona.apellida = 'Betancud';//Cambiamos dinamicamnete un valor del objeto
delete persona.apellido= 'Betancud'; //Eliminamos el error
console.log(persona);
