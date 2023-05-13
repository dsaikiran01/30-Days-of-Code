#include <stdio.h>

int main()
{
    int i, j, sum, max_sum = -81;
    int arr[6][6];

    for (int i = 0; i < 6; i++) 
    {
        for (int j = 0; j < 6; j++) 
        {
            scanf("%d", &arr[i][j]);
        }
    }
    
    for(int i = 0; i < 4; i++)
    {
        for(int j = 0; j < 4; j++)
        {
            sum = arr[i][j] + arr[i][j+1] + arr[i][j+2] + arr[i+1][j+1] + arr[i+2][j] + arr[i+2][j+1] + arr[i+2][j+2];
            if(sum > max_sum)
            {
                max_sum = sum;
            }
        }
    }
    
    printf("%d", max_sum);

    return 0;
}
