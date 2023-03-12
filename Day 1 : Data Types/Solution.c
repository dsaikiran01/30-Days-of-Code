#include <stdio.h>

int main() {
    int i = 4;
    double d = 4.0;
    char s[] = "HackerRank ";

    
    // Declare second integer, double, and String variables.
    int j;
    double e;
    char t[100];
    
    // Read and save an integer, double, and String to your variables.
    scanf("%d", &j);
    scanf("%lf", &e);
    scanf("%*[\n]%[^\n]", t);
    
    // Print the sum of both integer variables on a new line.
    printf("%d\n", i + j);
    
    // Print the sum of the double variables on a new line.
    printf("%.1lf\n", d + e);
    
    // Concatenate and print the String variables on a new line
    // The 's' variable above should be printed first.
    printf("%s%s", s, t);

    return 0;
}
