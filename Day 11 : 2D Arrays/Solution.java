import java.util.*;

public class Solution
{
    public static void main(String[] args)
    {
        Scanner scan = new Scanner(System.in);
        
        int maxSum = -6*9;
        
        List<List<Integer>> arr = new ArrayList<>();

        for(int i = 0; i < 6; i++)
        {
            arr.add(new ArrayList<Integer>());
            for(int j = 0; j < 6; j++)
            {
                arr.get(i).add(j, scan.nextInt());
            }
        }
        
        for(int i = 0; i < 4; i++)
        {
            for(int j = 0; j < 4; j++)
            {
                int sum1 = arr.get(i).get(j) + arr.get(i).get(j+1) + arr.get(i).get(j+2) + arr.get(i+1).get(j+1) + arr.get(i+2).get(j) + arr.get(i+2).get(j+1) + arr.get(i+2).get(j+2);
                if(sum1 > maxSum)
                {
                    maxSum = sum1;
                }
            }
        }
        
        System.out.println(maxSum);
        scan.close();
    }
}
