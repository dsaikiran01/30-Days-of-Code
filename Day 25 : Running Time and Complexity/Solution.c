#include <stdio.h>
#include <math.h>

int notPrime(int num)
{
    int i;
    for(i = 2; i <= sqrt(num); i++)
    {
        if(num % i == 0)
            return 1;
    }
    return 0;
}

int main()
{
    int N,i,num;
    scanf("%d", &N);
    for(i = 0; i < N; i++)
    {
        scanf("%d", &num);
        if(num <= 1)
        {
            printf("Not prime\n");
        }
        else if(num > 1 && notPrime(num))
        {
            printf("Not prime\n");
        }
        else
        {
        printf("Prime\n");
        }
    }  
    return 0;
}
