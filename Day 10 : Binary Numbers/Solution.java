import java.util.*;

public class Solution
{
    public static void main(String[] args)
    {
        Scanner scan = new Scanner(System.in);
        int n = scan.nextInt();
        int count = 0, no_of_1s = 0;
        
        while(n > 0)
        {
            int remainder = n % 2;
            if(remainder == 1)
            {
                count++;
                if(count > no_of_1s)
                {
                    no_of_1s = count;
                }
            }
            else
            {
                count = 0;
            }
            n /= 2;
        }
        
        System.out.println(no_of_1s);
        scan.close();
    }
}
