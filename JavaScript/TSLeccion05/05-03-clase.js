//let persona3 = new Persona('Carla', 'Ponce');
class Persona
    
    static contadorObjetosPersonas = 0;//Atributo estático

    email = 'Valor default email';//Atributo No estáti
    
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
    get apellido(){
            return this._apellido;
        }

    set apellido(apellido){
        this._apellido = apellido;
    }

    nombreCompleto(){//Clase 7 Clases Parte 2
        return this._nombre + ' ' + this._apellido;
    }
    static saludar(){
        console.log('Saludos desde este metodo static');
    }
    static saludar2(persona){
        console.log(persona.nombre+' '+persona.apellido);
    }
}
 //Sobreescribiendo el metodo de la clase Padre (Object) 7-4
      toString(){//regresa un String
        //Se aplica polimorfismo que significa = multiples formas en tiempo de ejecucion
        //el metodo que se ejecuta depende si es una referencia de tipo padre o hijo 
        //(o sea del objeto al cual apunta) 
        
        return this.nombreCompleto();
    }
}
class Empleado extends Persona{ //Clase hija
    constructor(nombre, apellido, departamento){
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
        return super.nombreCompleto()+' '+this._departamento;
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
let empleado1 = new Empleado("Maria", "Gimenez", "Sistemas");
console.log(empleado1);
console.log(empleado1.nombre);

//Clase 7 Clases Parte 2
//7.1 Heredar métodos
console.log(empleado1.nombreCompleto());


//7.3 Clase Object, toString, sobreescritura y Polimorfismo
Object.prototype.toString(); //Esta es la manera de acceder a atributos y metodos de manera dinamica

console.log( persona1.toString());
console.log( empleado1.toString());

Persona.saludar();
Persona.saludar2(persona1);
Empleado.saludar();
Empleado.saludar2(empleado1);

//Clase 8 Static
//8.2 Atributos estáticos
console.log(persona1.contadorObjetosPersona);//no se puede acceder desde el objeto de persona
console.log(Persona.contadorObjetosPersona);
console.log(Empleado.contadorObjetosPersona);

//8.3 Atributos estáticos vs No estáticos
console.log( persona1.email );
console.log( empleado1.email );
console.log( Persona.email);//no se puede acceder desde la clase persona
console.log( Empleado.email);//no se puede acceder desde la clase empleado

