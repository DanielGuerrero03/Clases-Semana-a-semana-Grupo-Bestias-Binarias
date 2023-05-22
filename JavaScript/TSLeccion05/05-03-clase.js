class Persona{
    constructor(nombre, apellido){
        this._nombre = nombre;
        this._apellido = apellido;
    }
    
    get nombre(){
        return this._nombre;
    }

    get apellido(){
        return this._apellido;
    }

    set nombre(nombre){
        this._nombre = nombre;
    }

    set apellido(apellido){
        this._apellido = apellido;
    }

}

let persona1 = new Persona('Martin', 'Perez');
console.log(persona1.nombre);
//metodo get y set para nombre
persona1.nombre = 'Juan Carlos';
console.log(persona1.nombre);
//metodo get y set para apellido
persona1.apellido = 'Gonzales';
console.log(persona1.apellido);
//console.log(persona1);
let persona2 = new Persona('Carlos', 'Lara');
console.log(persona2.nombre);
//metodo get set para nombre
persona2.nombre = 'Maria Laura';
console.log(persona2.nombre);
//metodo get y set para apellido
persona2.apellido = 'Garcia';
console.log(persona2.apellido)
//console.log(persona2);
