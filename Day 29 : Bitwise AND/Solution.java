import java.io.*;
import java.util.Scanner;

class Result {
    public static int bitwiseAnd(int N, int K) {
        int value = 0;
        for (int i = 1; i <= N; i++) {
            for (int j = i + 1; j <= N; j++) {
                int binary = i & j;
                if (binary < K && binary > value)
                    value = binary;
            }
        }
        return value;
    }
}

public class Solution {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);

        int t = scan.nextInt();

        for (int i = 0; i < t; i++) {
            int count = scan.nextInt();
            int lim = scan.nextInt();
            int res = Result.bitwiseAnd(count, lim);
            System.out.println(res);
        }

        scan.close();
    }
}