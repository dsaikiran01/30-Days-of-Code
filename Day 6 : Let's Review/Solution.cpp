#include <iostream>
using namespace std;

#define MAXS 10000

int print_chars(string& S, int index)
{
    while(index < S.length())
    {
        cout << S[index];
        index += 2;
    }
    return 0;
}

int main() {
    /* Enter your code here. Read input from STDIN. Print output to STDOUT */  
    int T;
    string S;
    cin >> T >> ws;
    
    for(int i = 0; i < T; i++)
    {
        int index;
        
        //cin.getline(S, MAXS);
        getline(cin, S);
        //for even indices
        print_chars(S, 0);
        cout << " ";
        
        //for odd indices
        print_chars(S, 1);
        cout << endl;
    }
    return 0;
}
