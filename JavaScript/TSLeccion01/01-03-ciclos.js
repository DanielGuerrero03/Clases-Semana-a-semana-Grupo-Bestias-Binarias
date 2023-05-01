// while Albano
let contador = 0;
while(contador < 3){
    console.log(contador);
    contador++;
}
console.log('Fin del ciclo while');

// do while Albano
let conteo = 0;
do{
    console.log(conteo);
    conteo++;
}while(conteo < 3);
console.log('Find del ciclo do while')

// ciclo for Albano
for ( let contando = 0; contando < 3; contando++ ){
    console.log(contando);
} 
console.log('Fin del ciclo for');

//Palabra reservada break
for(let contando = 0; contando <= 10; contando++){
    if( contando % 2 == 0){
		 console.log(contando);//muestra todos los pares
        break;
    }   
}

//Palabra reservada continue
for(let contando = 0; contando <= 10; contando++){
    if( contando % 2 !== 0){		 
        continue;
    }
    console.log(contando);
}
console.log("Termina el ciclo.")

//Etiqueta Labels
inicio:
for(let contando = 0; contando <= 10; contando++){
    if( contando % 2 !== 0){
        continue inicio;//ir a la siguiente iteracion
    }
    console.log(contando);
}
console.log("Termina el ciclo.")