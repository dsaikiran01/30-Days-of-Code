#include <stdio.h>

int main()
{
    int n, count = 0, remainder = 0, no_of_1s = 0;
    
    scanf("%d", &n);
    
    while(n > 0)
    {
        if(n % 2 == 1)
        {
            count++;
            if(count > no_of_1s)
            {
                no_of_1s = count;
            }
        }
        else
        {
            count = 0;
            
        }
        n /= 2;
    }
    
    printf("%d", no_of_1s);
    
    return 0;
}
