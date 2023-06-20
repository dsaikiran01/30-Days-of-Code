import java.util.*;

class Result
{
    public static int factorial(int n)
    {
        if(n > 1)
        {
            return n * factorial(n-1);
        }
        else
        {
            return 1;
        }
    }
}

public class Solution
{
    public static void main(String[] args)
    {
        Scanner scan = new Scanner(System.in);
        int n = scan.nextInt();
        int result = Result.factorial(n);
        System.out.println(result);
        scan.close();
    }
}
