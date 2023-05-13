#include <stdio.h>
#include <stdlib.h>
#include <string.h>

int main()
{
    int i,j,N;
    char names[N][20], emails[N][50], tempn[20], tempe[50];
    char *ptr, *ptr1;

    scanf("%d", &N);
    
    for (int N_itr = 0; N_itr < N; N_itr++) 
    {
        char firstName[20];
        char emailID[50];
        scanf(" %s", &names[N_itr]);
        scanf(" %s", &emails[N_itr]);
    }
    
    for(i = 0; i < N; i++)
    {
        for(j = 0; j < N; j++)
        {
            if(strcmp(names[j-1], names[j]) > 0)
            {
                strcpy(tempn, names[j-1]);
                strcpy(names[j-1], names[j]);
                strcpy(names[j], tempn);
                
                strcpy(tempe, emails[j-1]);
                strcpy(emails[j-1], emails[j]);
                strcpy(emails[j], tempe);
            }
        }
    }
    
    for(j=0;j<N;j++)
    {
         ptr=strstr(emails[j],"@");
         ptr1=strstr(emails[j],"g");
         if(strcmp(ptr,"@gmail.com")==0 && strncmp(ptr1,"gamil@gmail",8)!=0 )
            printf("%s\n",names[j]);
        else
        {}
    }

    return 0;
}
