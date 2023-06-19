import java.util.*;

public class Solution
{
    public static void main(String[] args)
    {
        Scanner scan  = new Scanner(System.in);
        
        int T = scan.nextInt();
        
        scan.nextLine();
        
        for(int i = 0; i < T; i++)
        {
            String myString = scan.nextLine();
            char[] myStringArray = myString.toCharArray();
            
            for(int j = 0; j < myString.length(); j+=2)
            {
                System.out.print(myStringArray[j]);
            }
            
            System.out.print(' ');
            
            for(int j = 1; j < myString.length(); j += 2)
            {
                System.out.print(myStringArray[j]);
            }
            
            System.out.println(' ');
        }
    }
}
