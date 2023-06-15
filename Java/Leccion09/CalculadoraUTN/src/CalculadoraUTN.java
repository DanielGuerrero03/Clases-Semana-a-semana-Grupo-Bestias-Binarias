import java.util.Scanner;
public class CalculadoraUTN {
    public static void main(String[] args) {
        Scanner entrada = new Scanner(System.in);
        System.out.println("********** Aplicacion Calculadora **********");
        //Mostrar el Menú
        System.out.print("""
                         |1. Sumar.
                         |2. Resta
                         |3. Multiplicación
                         |4. División
                         |5. Salir
                         """);
        System.out.println("Operacion a realizar?");     
        var operacion = Integer.parseInt(entrada.nextLine());
        If(operacion >= 1 && operacion <= 4 ) {
            System.out.print("Ingrese el valor para el operando1: ");
            var operando1 = Integer.parseInt(entrada.nextLine());
            System.out.print("Ingrese el valor para el operando2: ");
            var operando2 = Integer.parseInt(entrada.nextLine());
          }
   
      
    }
}
