import java.util.*;

class Difference
{
  	private int[] elements;
  	public int maximumDifference;

    Difference(int[] a)
    {
        this.elements = a;
    }
    
    void computeDifference()
    {
        int max = 0;
        for (int i = 0; i < elements.length; i++)
        {
            for(int j = 0; j < elements.length; j++)
            {
                int diff = Math.abs(elements[i] - elements[j]);
                if(diff > max)
                {
                    max = diff;
                }
            }
        }
        this.maximumDifference = max;
    }
}

public class Solution
{
    public static void main(String[] args)
    {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int[] a = new int[n];
        for (int i = 0; i < n; i++)
        {
            a[i] = sc.nextInt();
        }
        sc.close();

        Difference difference = new Difference(a);

        difference.computeDifference();

        System.out.print(difference.maximumDifference);
    }
}
