//Creacion de Array o arreglos
//let autos = new Array('Ferrari','Renault','BMW'); esta es la sintaxis vieja 
const autos = ['Ferrari','Renault','BMW'];
console.log(autos);  ['Ferrari', 'Renault', 'BMW' ]
/Recorremos los elementos de un arreglo
console.log(autos[0]); Ferrari
console.log(autos[2]); BMW
for(Let i = 0; i < autos.length; i++){
	console.log(i+' : '+autos[i]); 0 : Ferrari, 1: Renault, 2 : BMW
}
//Fernando Silva

or(let i =0; i <autos.length; i++){
    console.log(i+ ": " +autos[i]);
}

//Modificamos los elementos del Arreglo
autos[1] = "Volvo";
console.log(autos);

//Agregamos nuevos valores al arreglo
autos.push("Audi"); //Agregamos el elemento al final del arreglo
console.log(autos);

//Otras formas de agregar elementos al arreglo
autos[autos.length] = "Porche";
console.log(autos);

//Tercera forma de agregar elementos teniendo CUIDADO
autos[5] = "Renault"; // Si colocamos en la posicion 6 quedaria un lugar vacio
console.log(autos);

//Como preguntar si es un Array o Arreglo
console.log(Array.isArray(autos)); // Devuelve un booleano

console.log(autos instanceof Array);

//Daniel Guerrero
