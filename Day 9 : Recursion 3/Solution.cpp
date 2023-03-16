#include <bits/stdc++.h>
using namespace std;

int Factorial(int n) 
{
    int result = 1;
    if(n > 1)
    {
        return n * Factorial(n-1);
    }
    else
    {
        return 1;
    }
}

int main()
{
    int n;
    cin >> n;

    int result = Factorial(n);

    cout << result << endl;

    return 0;
}
