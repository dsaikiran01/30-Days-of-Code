#include <stdio.h>
#include <stdlib.h>

int main()
{
    int i, j, n, temp;
	scanf("%d", &n);

    int* a = malloc(n * sizeof(int));

    for (int i = 0; i < n; i++) {
        int a_item;
		scanf("%d", &a_item);

        *(a + i) = a_item;
    }

    int numberOfSwaps = 0;
    for(i = 0; i < n; i++)
    {   
        for(j = 0; j < n - 1; j++)
        {
            if(a[j] > a[j + 1])
            {
                temp = a[j];
                a[j] = a[j + 1];
                a[j + 1] = temp;
                numberOfSwaps++;
            }
        }
        
        if(numberOfSwaps == 0)
            break;
    }
    
    printf("Array is sorted in %d swaps.\n",numberOfSwaps);
    printf("First Element: %d\n", a[0]);
    printf("Last Element: %d\n", a[n-1]);

    return 0;
}
