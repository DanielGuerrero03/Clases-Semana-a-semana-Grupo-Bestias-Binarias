
package test;


public class TestForEach {
    public static void main(String[] args){
  int edades[] = {5, 6, 8, 9};
  
   for (int edad: edades) {
       System.out.println("edad = " + edad);
}
   Persona persona[] = {new Persona("Juan"), new Persona("Carla"), new Persona("Beatriz")};
   
   //ForEach 
   for(Persona persona: persona){
       System.out.println("persona = " + persona);
   }
}
}
