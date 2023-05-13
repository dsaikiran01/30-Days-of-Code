#include <stdio.h>

int bitwiseAnd(int N, int K) 
{
    int tempList[N];
    int i, j, temp, max = 0;
    
    for(i = 1; i <= N; i++)
    {
        tempList[i-1] = i;
    }
    
    for(i = 0; i < N; i++)
    {
        for(j = i + 1; j < N; j++)
        {
            temp = tempList[i] & tempList[j];
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
    int i, t;
    scanf("%d", &t);
  
    for (i = 0; i < t; i++) 
    {
        int count, lim;
        scanf("%d %d", &count, &lim);
        int res = bitwiseAnd(count, lim);
        printf("%d\n", res);
    }
    return 0;
}
