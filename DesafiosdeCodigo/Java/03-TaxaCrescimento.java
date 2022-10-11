import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        double A, B;

        Scanner input = new Scanner(System.in);
        A = input.nextInt();
        B = input.nextInt();
               

        int anos = 0;
        
        while (A < B){
          A += (A * 3 / 100);
          B += (B * 1.5 / 100);
          anos++;
        }

        System.out.println(anos + " anos");
    }
}