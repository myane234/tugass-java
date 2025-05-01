import java.util.*;

public class Faruq_zhariif_abdurrahman_33 {
    // clear code
    public static void main(String[] args) {
        String[] rantang;
        rantang = new String[4];

        Scanner input = new Scanner(System.in);

        for (int x = 0; x < 4; x++) {
            System.out.print("isi rantang : ");
            rantang[x] = input.nextLine();
        }

        for (int x = 0; x < 4; x++) {
            System.out.println(rantang[x]);
        }
    }
}