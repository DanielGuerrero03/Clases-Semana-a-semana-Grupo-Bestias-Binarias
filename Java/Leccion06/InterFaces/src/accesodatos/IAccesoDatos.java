/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Interface.java to edit this template
 */
package accesodatos;

/**
 *
 * @author fersd
 */
public interface IAccesoDatos {
    int MAX_REGISTRO = 10;
    
    //Metodo Insertar es abstracto y sin cuerpo
    void insertar();
    
    void listar ();
    
    void actualizar();
    
    void eliminar ();
}
