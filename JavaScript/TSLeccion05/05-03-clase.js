//let persona3 = new Persona('Karla', 'Juarez'); esto no se puede hacer porque no se puede crear un objeto de una clase abstracta           


class Persona{ //Clase padre

    static contadorPersonas = 0; //atributo estatico
    //email = 'Valor default email'; //atributo no estatico

    static get MAX_OBJ(){ //Este metodo simula una constante
        return 5;
    }

    constructor(nombre, apellido){
        this._nombre = nombre;
        this._apellido = apellido;
        if(Persona.contadorPersonas < Persona.MAX_OBJ){
            this.idPersona = ++Persona.contadorPersonas;    
        }
        else{
            console.log('Se ha superado el maximo de objetos permitidos');
        }
        
        //console.log('Se incrementa contador: '+Persona.contadorObjetosPersona);
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

    nombreCompleto(){
        return this.idPersona+' '+this._nombre+' '+this._apellido;
    }

    toString(){ // Regresa un String
        return this.nombreCompleto();    
    }

    static saludar(){
        console.log('Saludos desde metodo static');
    }

    static saludar2(persona){
        console.log(persona.nombre+' '+persona.apellido);
    }
}

class Empleado extends Persona { //Clase hija
    constructor(nombre, apellido,departamento){
        super(nombre, apellido);
        this._departamento = departamento;
    }

    get departamento(){
        return this._departamento;
    }

    set departamento(departamento){
        this._departamento = departamento;
    }

    //Sobreescritura
    nombreCompleto(){
        return super.nombreCompleto()+', '+this._departamento;
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

let empleado1 = new Empleado('Maria', 'Gimenez', 'Sistemas');
console.log(empleado1);
console.log(empleado1.nombre);
console.log(empleado1.nombreCompleto());

//Object.proeotype.toString Esta la manera de acceder a atributos y metodos de manera dinamica
console.log(empleado1.toString());
console.log(persona1.toString());

//persona1.saludar(); no se utiliza desde el objeto sino desde la clase
Persona.saludar();
Persona.saludar2(persona1);

Empleado.saludar()
Empleado.saludar2(empleado1);

//console.log(persona1.contadorObjetosPersona);
console.log(Persona.contadorObjetosPersona);
console.log(Empleado.contadorObjetosPersona);

console.log(persona1.email);
console.log(empleado1.email);
//console.log(Persona.email);
console.log(persona1.toString());
console.log(persona2.toString());
console.log(empleado1.toString());
console.log(Persona.contadorPersonas);
let persona3 = new Persona('Carla', 'Pertosi');
console.log(persona3.toString());
console.log(Persona.contadorPersonas);
//Persona.MAX_OBJ = 10; //No se puede modificar una constante
console.log(Persona.MAX_OBJ);

let persona4 = new Persona('Franco', 'Diaz');
console.log(persona4.toString());
let persona5 = new Persona('Liliana', 'Paz');
console.log(persona5.toString());
