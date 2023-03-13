# Enter your code here. Read input from STDIN. Print output to STDOUT
def print_chars(string, index, delimiter) :
    while(index < len(S)) :
        print(S[index], end = '')
        index += 2
    if index % 2 != 0 : print('')

if __name__ == '__main__' :
    T = int(input())
    for i in range(T) :
        S = input()
        #for even indices
        print_chars(S, 0, '')
        print(" ", end = '')
        #for odd indices
        print_chars(S, 1, '\n')
