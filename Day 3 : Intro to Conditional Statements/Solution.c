#include <stdio.h>

int main()
{
    int N;
    scanf("%d", &N);
    
    if (N % 2 != 0)
        printf("Weird");
    else
    {
        if (N >= 2 && N <= 5 || N > 20)
            printf("Not Weird");
        else if (N >= 6 && N <= 20)
            printf("Weird");
    }
    return 0;
}
