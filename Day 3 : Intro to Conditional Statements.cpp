#include <iostream>

using namespace std;

int main()
{
    string N_temp;
    getline(cin, N_temp);

    int N = stoi(N_temp);
    
    if (N % 2 != 0)
        cout << "Weird" << endl;
    else
    {
        if (N >= 2 && N <= 5 || N > 20)
            cout << "Not Weird" << endl;
        else if (N >= 6 && N <= 20)
            cout << "Weird" << endl;
    }

    return 0;
}
