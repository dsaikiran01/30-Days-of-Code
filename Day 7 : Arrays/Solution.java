import java.util.*;

public class Solution
{
    public static void main(String[] args)
    {
        Scanner scan = new Scanner(System.in);
        int n = scan.nextInt();
        ArrayList<Integer> arr = new ArrayList<Integer>();

        for(int i = 0; i < n; i++)
        {
            arr.add(scan.nextInt());
        }
        
        Collections.reverse(arr);
        
        for(int i:arr)
        {
            System.out.print(i);
            System.out.print(' ');
        }

        scan.close();
    }
}
