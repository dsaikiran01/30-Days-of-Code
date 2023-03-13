#include <stdio.h>
#include <string.h>

#define MAXS 10000

void print_chars(char *S, int index);

int main() {
    /* Enter your code here. Read input from STDIN. Print output to STDOUT */
    int i, T;
    char S[MAXS];
    
    scanf("%d ", &T);
    for(i = 0; i < T; i++)
    {
        int index;
        scanf("%s", &S);
        //fgets(S, MAXS, stdin);
        
        //for even indices
        print_chars(S, 0);
        printf(" ");
        
        //for odd indices
        print_chars(S, 1);
        //printf("\n");
    }
    return 0;
}

void print_chars(char *S, int index)
{
    //int j;
    int lenS = strlen(S);
    while(S[index] != '\0')
    {
        printf("%c", S[index]);
        index += 2;
        if(index >= lenS)
        {
            break;
        }
    }
    if (index % 2 != 0)
    {
        printf("\n");
    }
}
