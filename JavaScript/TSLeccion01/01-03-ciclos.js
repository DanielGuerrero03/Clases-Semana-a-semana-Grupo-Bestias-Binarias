// while Albano

// do while Albano

// ciclo for Albano


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