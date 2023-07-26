import java.util.*;

public class Solution {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);

        int retDate = scan.nextInt();
        int retMonth = scan.nextInt();
        int retYear = scan.nextInt();

        int expDate = scan.nextInt();
        int expMonth = scan.nextInt();
        int expYear = scan.nextInt();

        if (expYear == retYear) {
            if (expMonth == retMonth) {
                if (retDate <= expDate)
                    System.out.println(0);
                else
                    System.out.println(15 * (retDate - expDate));
            } else if (retMonth < expMonth)
                System.out.println(0);
            else
                System.out.println(500 * (retMonth - expMonth));
        } else if (retYear < expYear)
            System.out.println(0);
        else
            System.out.println(10000);

        scan.close();
    }
}