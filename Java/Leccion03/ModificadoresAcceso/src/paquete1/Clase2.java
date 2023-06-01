
package paquete1;


final class Clase2{
    String atributoDefault = "Valor del atributo default";
    
    //Clase2(){
    //    System.out.println("Constructor Default");
    //  
   // }
   
    public Clase2(){
       super();
       this.atributoDefault = "Modificacion del atributo default";
       System.out.println("atributoDEfault = " + this.atributoDefault);
       this.metodoDefault();
    }
    void metodoDefault(){
        System.out.println("Metodo Default");
        
    }
}
