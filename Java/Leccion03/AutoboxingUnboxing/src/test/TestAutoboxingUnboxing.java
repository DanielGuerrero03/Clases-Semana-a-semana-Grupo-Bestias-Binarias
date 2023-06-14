
package test;
/*1.2*/
public class TestAutoboxingUnboxing {
    public static void main(String[] args){
        //Clases  envolventes o Wrapper 
        /*
           Clases envolventes de tipos primitivos 
           int = la clase envolvente es integer 
           long = la clase envolvente es Long
           float = la clase envolvente es Float
           double = la clase envolvente es Double
           boolean = la clase envolvente es Boolean
           char = la clase envolvente es de Character 
           shot = la clase envolvente es Short
        */
    int enteroPrim = 10; //Tipo pimitivo 
    System.out.println("enteroPrim = " + enteroPrim);
    Integer entero = 10; //Tipo object con la clase Integer 
    System.out.println("entero = " + entero.toString());
    
    int entero2 = entero; //Unboxing
    System.out.println("entero2 = " + entero2);
    }  
}
