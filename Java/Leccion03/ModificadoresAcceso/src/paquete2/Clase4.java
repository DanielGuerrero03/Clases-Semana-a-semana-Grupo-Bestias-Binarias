
package paquete2;

public class Clase4 {
   private String atributoPrivate = "atributo Privado";
   
   private Clase4(){
       System.out.println("Costructor privado");
       
   }
   //Creamos un costructor public para poder crear objetos
   public Clase4(String argumentos){ //Aqui se puede llamar al costructor vacio 
       this();
       System.out.println("Cosntructor publico");
       
   }
   //Metodo private
   private void metodoPrivador (){
       System.out.println("Metodo privado");
   }

    public String getAtributoPrivate() {
        return atributoPrivate;
    }

    public void setAtributoPrivate(String atributoPrivate) {
        this.atributoPrivate = atributoPrivate;
    }
   
   
}
