#include <stdio.h>

void solve(double meal_cost, int tip_percent, int tax_percent) {
    double tip, tax, total;
    tip = ((double)tip_percent / 100) * meal_cost;
    tax = ((double)tax_percent / 100) * meal_cost;
    total = meal_cost + tip + tax;
    printf("%.0lf", total);
}

int main()
{
    double meal_cost;
    int tip_percent;
    int tax_percent;

    scanf("%lf", &meal_cost);
    scanf("%d", &tip_percent);
    scanf("%d", &tax_percent);
    solve(meal_cost, tip_percent, tax_percent);

    return 0;
}
