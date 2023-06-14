
package domain;

public class Escritor extends Empleado {
    final TipoEscritura tipoEscritura;
    
    public Escritor(String nombre, double sueldo, TipoEscritura tipoEscritura){ // constructor
        super(nombre, sueldo);
        this.tipoEscritura = tipoEscritura;
    }
    
    // Método sobreescribir
    @Override
    public String obtenerDetalles(){
        return super.obtenerDetalles()+", Tipo Escritura: "+ tipoEscritura.getDescripcion();
    }
    
    @Override
    public String toString(){
        return "Escritor{" + "tipoEscritora ="+ tipoEscritura +"}"+" "+super.toString();
    }
    
    public TipoEscritura getEscritura(){
        return this.tipoEscritura;
    }
}
