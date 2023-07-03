import java.io.*;
import java.util.*;

public class Solution
{
    public static void main(String[] args) throws IOException
    {
        Scanner scan = new Scanner(System.in);
        
        int numberOfSwaps = 0;
        List<Integer> a = new ArrayList<Integer>();

        int n = scan.nextInt();

        for(int i = 0; i < n; i++)
        {
            a.add(i, scan.nextInt());
        }
        
        for(int i = 0; i < n; i++)
        {
            for(int j = 0; j < n-1; j++)
            {
                if(a.get(j) > a.get(j+1))
                {
                    Collections.swap(a, j, j+1);
                    numberOfSwaps++;
                }
            }
            if(numberOfSwaps == 0)
            {
                break;
            }
        }
        
        System.out.println("Array is sorted in " + numberOfSwaps + " swaps.");
        System.out.println("First Element: " + a.get(0));
        System.out.println("Last Element: " + a.get(n-1));
        
        scan.close();
    }
}
