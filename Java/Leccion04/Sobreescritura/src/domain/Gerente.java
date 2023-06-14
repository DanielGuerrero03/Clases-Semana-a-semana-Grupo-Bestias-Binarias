package domain;

public class Gerente extends Empleado {
    
    private String departamento;
    
    public Gerente(String nombre, double sueldo, String departamento){
        super(nombre, sueldo);
        this.departamento = departamento;
    }
    
    //Sobreescribimos el metodo de la clase Padre (Empleado)
    @Override
    public String obtenerDetalles(){
        return super.obtenerDetalles() + ", Departamento: " + this.departamento;
    }
    
}
