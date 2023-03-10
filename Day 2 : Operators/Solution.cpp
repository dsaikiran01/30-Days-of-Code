#include <iostream>
#include <cmath>

using namespace std;

void solve(double meal_cost, int tip_percent, int tax_percent) {
    double tip = (double(tip_percent) / 100) * meal_cost;
    double tax = (double(tax_percent) / 100) * meal_cost;
    double total = meal_cost + tip + tax;
    cout << round(total) << endl;
}

int main()
{
    string meal_cost_temp;
    getline(cin, meal_cost_temp);

    double meal_cost = stoi(meal_cost_temp);

    string tip_percent_temp;
    getline(cin, tip_percent_temp);

    int tip_percent = stoi(tip_percent_temp);

    string tax_percent_temp;
    getline(cin, tax_percent_temp);

    int tax_percent = stoi(tax_percent_temp);

    solve(meal_cost, tip_percent, tax_percent);

    return 0;
}
