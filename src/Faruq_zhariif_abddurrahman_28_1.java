import java.util.Scanner;
//clear code

public class Faruq_zhariif_abddurrahman_28_1 {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        System.out.print("Masukkan angka 1-3 untuk memilih khodam: ");
        int x = input.nextInt();

        switch (x) {
            case 1 -> System.out.println("Tralalelo tralala");
            case 2 -> System.out.println("Tung tung tung sahur");
            case 3 -> System.out.println("Capucino asasino");
            default -> System.out.println("Tidak ada (input 1-3 saja)");
        }
    }
}