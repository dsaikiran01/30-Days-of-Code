import java.util.*;

public class Solution {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);

        int T = scan.nextInt();
        for (int j = 0; j < T; j++) {
            int num = scan.nextInt();
            if (num <= 1) {
                System.out.println("Not prime");
            } else {
                int divisors = 1;
                for (int i = 2; i <= Math.sqrt(num); i++) {
                    if (num % i == 0) {
                        System.out.println("Not prime");
                        divisors++;
                        break;
                    }
                }
                if (divisors == 1)
                    System.out.println("Prime");
            }
        }
        scan.close();
    }
}
