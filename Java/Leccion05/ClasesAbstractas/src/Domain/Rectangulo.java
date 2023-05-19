
package Domain;

public class Rectangulo extends FiguraGeometrica {
   //CONSTRUCTOR 
    
    public Rectangulo (String tipoFigura){
        super(tipoFigura);
    }
    
    @Override
    public void dibujar(){
        System.out.println("Se imprime un: "+this.getClass().getSimpleName());
    }

}
