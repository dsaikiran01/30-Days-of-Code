#include <cmath>
#include <iostream>
using namespace std;

bool notPrime(int num)
{
    
    for(int j = 2; j <= sqrt(num); j++) //root n
    {
        if(num % j == 0)
        {
            return true;
        }
    }
    return false;
}

int main()
{
    int N, num;
    cin >> N;
    
    for(int i = 0; i < N; i++)
    {
        cin >> num;
        
        if(num <= 1)
        {
            cout << "Not prime" << endl;
        }
        else if(num > 1 && notPrime(num))
        {
            cout << "Not prime" << endl;
        }
        else
        {
            cout << "Prime" << endl;
        }
    }
    return 0;
}
