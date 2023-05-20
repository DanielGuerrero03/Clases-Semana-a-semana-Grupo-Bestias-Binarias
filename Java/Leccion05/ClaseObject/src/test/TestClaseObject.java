
package test;

import domain.*;

public class TestClaseObject {
    public static void main(String[] args) {
        Empleado empleado1 = new Empleado("Juan", 5000);
        Empleado empleado2 = new Empleado("Pedro",5000);
        
        if (empleado1 == empleado2){
            System.out.println("Tiene la misma referencia de memoria");
        }
        else{
            System.out.println("Tiene distinta referencia de memoria");
        }
        
        if (empleado1.equals(empleado2)){ // método equals es para ver el contenido
            System.out.println("Los objetos son iguales en contenido");
        }
        else{
            System.out.println("Los objetos son distintos en contenido");
        }
    }
}
