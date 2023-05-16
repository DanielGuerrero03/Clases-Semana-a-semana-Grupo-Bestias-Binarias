let x = 10; //variable de tipo primitiva
console.log(x.length); 
console.log('Tipos Primitivos')
//Objeto
let persona = {
    nombre: 'Carlos',
    apellido: 'Gil',
    email: 'cgil@gmail.com',
    edad: 30,
    nombreCompleto: function(){ //se agrega un método dentro del objeto
        return this.nombre + ' ' + this.apellido;
    }, 
    get nombreEdad(){
        return 'El nombre es:'+ this.nombre+' Edad: '+this.edad; 
    },
    get lang(){
        return TouchList.idioma.toUpperCase(); //Convierte las minusculas a mayusculas.
    },
    set lang(lang){
        this.idioma = lang.toUpperCase();
    
}

console.log(persona.nombre);
console.log(persona.apellido);
console.log(persona.email);
console.log(persona.edad);
console.log(persona);
console.log(persona.nombreCompleto());
console.log('Ejecutando con un objeto');

let persona2 = new Object(); 
persona2.nombre = 'Juan';
persona2.direccion = 'Saturno 15';
persona2.telefono = '1234567890';
console.log(persona2.telefono)

console.log('Creamos un nuevo objeto');


console.log('usamos el ciclo for in')
////
console.log('cambiamos y eliminamos un error');
persona.apellida = 'Betancud';//Cambiamos dinamicamnete un valor del objeto
delete persona.apellido = 'Betancud'; //Eliminamos el error
console.log(persona);


//Distintas formas de imprimir un objeto
//Numero 1: la mas sencilla: concatenar cada valor de cada propiedad
console.log("Distintas formas de imprimir un objeto: forma 1");
console.log(persona.nombre+", "+persona.apellido);

//Numero 2: a traves del ciclo for in
console.log("Distintas formas de imprimir un objeto: forma 2");
for(nombrePropiedad in persona){
    console.log(persona[nombrePropiedad]);
}

//Numero 3: La funcion Object.values()
console.log("Distintas formas de imprimir un objeto: forma 3");
let personaArray = Object.values(persona);
console.log(personaArray);

//Numero 4: utilizaremos el metodo JSON.stringify
console.log("Distintas formas de imprimir un objeto: forma 4");
let personaString = JSON.stringify(persona);
console.log(personaString);

console.log('Comenzamos a utilizar el metodo get');
console.log(persona.nombreEdad);

console.log('Comenzamos con el metodo get para idiomas');
persona.lang = 'en'; 
console.log(persona.lang);

function persona3(nombre = 'Luis', apellido, email){ //Contructor
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
}
let padre = new persona3('Leo', 'Lopez', 'lopezl@gmail.com'); 
padre.nombre = 'Luis';
console.log(padre);

let madre = new persona3('Laura', 'Contrera', 'contreral@gmail.com');
console.log(madre);

