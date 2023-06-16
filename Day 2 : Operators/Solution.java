import java.util.*;

class Result
{
    public static void solve(double meal_cost, int tip_percent, int tax_percent)
    {
    double tip = (double)tip_percent / 100 * meal_cost;
    double tax = (double)tax_percent / 100 * meal_cost;
    double total = meal_cost + tip + tax;
    System.out.println(Math.round(total));
    }
}

public class Solution
{
    public static void main(String[] args)
    {
        Scanner scan = new Scanner(System.in);

        double meal_cost = scan.nextDouble();

        int tip_percent = scan.nextInt();

        int tax_percent = scan.nextInt();

        Result.solve(meal_cost, tip_percent, tax_percent);

        scan.close();
    }
}
