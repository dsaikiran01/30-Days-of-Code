import java.util.Scanner;

public class Solution
{
    public static void main(String[] args)
  {
        Scanner scanObj = new Scanner(System.in);
        
        int i = 4;
        double d = 4.0;
        String s = "HackerRank ";
        
        int num = scanObj.nextInt();
        double decimal = scanObj.nextDouble();
        scanObj.nextLine();
        String sentence = scanObj.nextLine();
        
        System.out.println(i + num);
        System.out.println(d + decimal);
        System.out.println(s.concat(sentence));
    }
}
