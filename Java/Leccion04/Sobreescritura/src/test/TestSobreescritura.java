package test;

import domain.*;

public class TestSobreescritura {
    public static void main(String[] args) {

        Empleado empleado1 = new Empleado("Juan", 10000);
        //System.out.println("empleado = " + empleado.obtenerDetalles());
        imprimir(empleado1);
        
        empleado1 = new Gerente("Karla", 10000, "Contabilidad");
        //Gerente gerente1 = new Gerente("Jose", 5000, "Sistemas");
        //System.out.println("gerente1 = " + gerente1.obtenerDetalles());
        //imprimir(gerente1);
         imprimir(empleado1);
    }
    
     public static void imprimir(Empleado empleado){
        String detalles = empleado.obtenerDetalles();
        System.out.println("empleado = " + detalles);
    }
}
