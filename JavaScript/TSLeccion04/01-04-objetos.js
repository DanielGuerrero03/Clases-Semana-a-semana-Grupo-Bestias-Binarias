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
let padre = new Persona3('Leo', 'Lopez', 'lopezleo@gmail.com');
padre.nombre = 'Luis'; //meodificado 
padre.telefono = '5492618282821'; //una propiedad exclusiva del objeto padre
console.log(persona); Persona3 {nombre: 'Luis', apellido: 'Lopez', email: 'lopezleo@gmail.com'}
console.log(padre.nombreCompleto()); Luis Lopez
let madre = new Persona3('Laura', 'Contrera', 'contreral@gmail.com');
console.log(madre); Persona3 {nombre: 'Laura', apellido: 'Contrera', email: 'contreral@gmail.com'}
console.log(madre.telefono); undefined //la propiedad no esta definida 
console.log(madre.nombreCompleto()); Laura Contrera

//Diferentes formas de crear objetos 
//caso numero 1
let miObjeto = new Object(); //esta es una opcion formal 
//caso numero 2
let miObjeto = {}; //Esta opcion es breve y recomendada

//caso String
let miCaddena1 = new String('Hola'); //Sintaxis formal 
//caso String 2
let miCaddena2 = 'Hola'; //Esta es la sintaxis simplificada y recomendada

//caso con numeros 1
let miNumero = new Number(1); //Es formal no recomendada
let miNumero2 = 1; //Sintaxis recomendada

//caso boolean 1
let miBoolean1 = new Boolean(false); //Formal 
//caso boolean 2
let miBoolean2 = false; //Sintaxis recomendada

//caso Arreglos 1
let miArreglo1 = new Array(); //Formal 
//caso Arreglos 2
let miArreglo2 = []; //Sintaxis recomendad

//caso function 1
let miFuncion1 = new function(){}; //Todo despues de new es considerado
//caso function 2
let miFuncion2 = function(){}; //Notacion simplificada y recomendada

//Uso de propotype
Persona3.prototype.telefono = '2618383832';
console.log(padre); Persona3 { nombre: 'Luis', apellido: 'Lopez', email: 'lopezl@gmail.com', nombreCompleto: 'Luis Lopez', telefono: '5492618282821'}
console.log(madre.telefono); 2618383832
madre.telefono = '5492618383832';
console.log(madre.telefono);  5492618383832


//uso de call 
let persona4 ={
    nombre: 'Juan',
    apellido: 'Perez',
    nombreCompleto2: function(titulo, telefono){
        return titulo+': '+this.nombre+' '+this.apellido+' '+telefono;

    }
}

let persona5 = {
    nombre: 'Carlos',
    apellido: 'Lara',
}

console.log(persona4.nombreCompleto2('Lic.', '5942618484845')); Lic.: Juan Perez 5942618484845
console.log(persona4.nombreCompleto2.call(persona5, 'Ing.', '5492618585856')); Ing.: Carlos Lara 5492618585856

//5.7 El uso del método apply
console.log( persona4.nombreCompleto2('Lic', '543815024221') );

let arreglo = ['Ing','543815024221'];
console.log( persona4.nombreCompleto2.apply(persona5, arreglo));
console.log( persona4.nombreCompleto3.apply(persona5));
