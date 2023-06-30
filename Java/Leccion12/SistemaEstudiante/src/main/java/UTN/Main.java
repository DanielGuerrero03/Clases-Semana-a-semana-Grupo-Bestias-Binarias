package UTN;

// Press Shift twice to open the Search Everywhere dialog and type `show whitespaces`,
// then press Enter. You can now see whitespace characters in your code.
public class Main {
    public static void main(String[] args) {
        var conexion = UTN.conexion.Conexion.getConnection();
        if (conexion != null)
            System.out.println("Conexion existosa: "+conexion);
         else
            System.out.println("Error al conectar con la base de datos");

    } // Fin metodo main
} // Fin clase Main