import java.util.Scanner;

public class Main {

  public static void main(String[] Args) {

   Scanner sc = new Scanner(System.in);
   double tmhMB = sc.nextFloat();
   double tmhMbps = sc.nextFloat();
   double tempoSegundos = tmhMB / tmhMbps;
   double tempoMinutos = tempoSegundos / 60;

    System.out.printf("%.2f", tempoMinutos);
    
    }
}