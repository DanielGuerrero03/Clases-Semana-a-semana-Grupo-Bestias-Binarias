
package paquete1;


public class ClaseHija2 extends Clase2{
    public ClaseHija2(){
        super();
        this.atributoDefault = "Modificacion del atributo Defauelt";
        System.out.println("atributoDefault = " + this.atributoDefault);
        this.metodoDefault();
    }
}
