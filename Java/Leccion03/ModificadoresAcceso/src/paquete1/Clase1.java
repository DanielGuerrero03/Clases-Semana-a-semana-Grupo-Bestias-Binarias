/* punto 1.3 Mariana Cervantes */
package paquete1;

public class Clase1 {
   public String atributoPublic = "Valor atributo public";
   protected String atributoProtected = "valor atributo protected" ;
   
    public Clase1(){
        System.out.println("Constructor public");
        
    }
    protected Clase1 (String atributoPublic){
        System.out.println("Contructor protected");
    }
    public void metodoPublico(){
        System.out.println("Metodo public");
        
    }
    
    protected void metodoProtected(){
        System.out.println("Metodo protected");
    }
}
