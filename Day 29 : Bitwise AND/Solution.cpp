#include <bits/stdc++.h>
using namespace std;

int bitwiseAnd(int N, int K) 
{
    vector<int> tempList;
    int temp, max = 0;
    
    for(int i = 1; i <= N; i++)
    {
        tempList.push_back(i);
    }
    
    for(int a = 0; a < N; a++)
    {
        for(int b = a + 1; b < N; b++ )
        {
            temp = tempList[a] & tempList[b];
            if(temp < K && temp > max)
            {
                max = temp;
            }
        }
    }
    return max;
}

int main()
{
    int t;
    cin >> t;

    for (int t_itr = 0; t_itr < t; t_itr++) 
    {
        int count, lim;
        cin >> count >> lim;

        int res = bitwiseAnd(count, lim);

        cout << res << "\n";
    }

    return 0;
}
