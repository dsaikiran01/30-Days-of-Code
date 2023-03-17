#include <bits/stdc++.h>
using namespace std;

int main()
{
    int n, remainder, count = 0, no_of_1s = 0;

    cin >> n;

    //convert to binary
    while(n > 0)
    {
        remainder = n % 2;
        n = n / 2;
        if(remainder == 1)
        {
        count += 1;
        if (count > no_of_1s)
                no_of_1s = count;
        }
        else
        {
            count = 0;
        }
    }
    
    cout << no_of_1s << endl;

    return 0;
}
