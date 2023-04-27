package test;

public class TestARgumentosVariables {
    public static void main (String[] args){
     imprimirNumeros(3, 4, 5);
     imprimirNumeros(1, 2); 
     variosParámetros("Juan" , "Perez" , 7, 8, 9);
}

    private static void variosParámetro(String nombre, int ...numeros){
        String apellido = null;
        System.out.println("Nombres: "+nombre+ " Apellido: "+apellido);
        imprimirNumeros(numeros);
    }
    
private static void imprimirNumeros(int ...numeros){
for(int i = 0; i < numeros.length; i++){
    System.out.println("Elementos: "+numeros[i]);
}
}

    private static void variosParámetros(String juan, String perez, int i, int i0, int i1) {
        throw new UnsupportedOperationException("Not supported yet.");
    }

   
}
