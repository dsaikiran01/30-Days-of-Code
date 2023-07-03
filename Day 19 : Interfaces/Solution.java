import java.util.*;

interface AdvancedArithmetic
{
   int divisorSum(int n);
}

class Calculator implements AdvancedArithmetic
{
    public int divisorSum(int n)
    {
        int sum1 = 0;
        for(int i = 1; i <= n; i++)
        {
            if(n%i==0)
            {
                sum1 += i;
            }
        }
        return sum1;
    }
}

class Solution 
{
    public static void main(String[] args) 
    {
        Scanner scan = new Scanner(System.in);
        int n = scan.nextInt();
        scan.close();
        
      	AdvancedArithmetic myCalculator = new Calculator(); 
        int sum = myCalculator.divisorSum(n);
        System.out.println("I implemented: " + myCalculator.getClass().getInterfaces()[0].getName() );
        System.out.println(sum);
    }
}
