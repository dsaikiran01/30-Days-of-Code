#include <cstdio>
#include <vector>
#include <iostream>

using namespace std;

class Difference {
  private:
    vector<int> elements;
    
  public:
  	int maximumDifference;
    
    Difference(vector<int> inputs)
    {
        elements = inputs;
    }
    
    int computeDifference()
    {
        int diff, max = 0;
        for(int i = 0; i < elements.size(); i++)
        {
            for(int j = 0; j < elements.size(); j++)
            {
                diff = abs(elements[i] - elements[j]);
                if(diff > max)
                {
                    max = diff;
                }
            }
        }
        maximumDifference = max;
        return 0;
    }
};

int main() {
    int N;
    cin >> N;
    
    vector<int> a;
    
    for (int i = 0; i < N; i++) {
        int e;
        cin >> e;
        
        a.push_back(e);
    }
    
    Difference d(a);
    
    d.computeDifference();
    
    cout << d.maximumDifference;
    
    return 0;
}
