#include <bits/stdc++.h>
using namespace std;

int main()
{
    int N;
    cin >> N;
    
    vector<string> names(N), emails(N), finalList;

    cout << "Enter First name and Email Id" << endl;
    for (int N_itr = 0; N_itr < N; N_itr++) {
        cin >> names[N_itr];
        cin >> emails[N_itr];
    }
    
    for(int i = 0; i < N; i++)
    {
        if(regex_match(emails[i], regex("(.*)@gmail.com")))
        {
            finalList.push_back(names[i]);
        }
    }
    
    sort(finalList.begin(), finalList.end());
    
    for(int i = 0; i < finalList.size(); i++)
    {
        cout << finalList[i] << endl;
    }

    return 0;
}
