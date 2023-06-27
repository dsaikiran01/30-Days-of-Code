import java.util.*;

public class Solution
{
    public static void main(String[] args)
    {
        Scanner scan = new Scanner(System.in);
        String S = scan.nextLine();
        try
        {
            int N = Integer.parseInt(S);
            System.out.println(N);
        }
        catch(NumberFormatException n)
        {
            System.out.println("Bad String");
        }
        scan.close();
    }
}
