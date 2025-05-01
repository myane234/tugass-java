import java.util.*;
// clear code 
public class Faruq_zhariif_abdurrahman_20 {

    public static void main(String[] args) {
        String nama;
        int umur;
        double uang;
        char huruf;
        float phi;
        boolean kondisi;

        Scanner input = new Scanner(System.in);

        System.out.print("Inputkan Nama : ");
        nama = input.nextLine();
        System.out.println("Nama Saya : " + nama);

        System.out.print("Inputkan Umur : ");
        umur = input.nextInt();
        System.out.println("Umur Saya : " + umur);

        System.out.print("Inputkan Uang : ");
        uang = input.nextDouble();
        System.out.println("Uang Saya : " + uang);

        input.nextLine(); 
        System.out.print("Inputkan Huruf : ");
        huruf = input.nextLine().charAt(0);
        System.out.println("Huruf Favorit Saya : " + huruf);

        System.out.print("Inputkan Phi : ");
        phi = input.nextFloat();
        System.out.println("Phi : " + phi);

        System.out.print("Inputkan Kondisi : ");
        kondisi = input.nextBoolean();
        System.out.println("Kondisi Saya : " + kondisi);

    }
}