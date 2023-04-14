#include <stdio.h>
#include <stdlib.h>

int main()
{
    int d1, m1, y1, d2, m2, y2;
    scanf("%d %d %d", &d1 , &m1 , &y1); //returned dates
    scanf("%d %d %d", &d2, &m2, &y2); //due dates
    
    if(y1 > y2)
    {
        printf("%d\n", 10000);
    }
    else if (y1 < y2)
    {
        printf("%d\n", 0);
    }
    else if(y1 == y2)
    {
        if(m1 <= m2)
        {
            if(d1 <= d2)
            {
                printf("%d\n", 0);
            }
            else {
                printf("%d\n", abs(15 * (d1 - d2)));
            }
        }
        else {
            printf("%d\n", abs(500 * (m1 - m2)));
        }
    }
    
    return 0;
}
