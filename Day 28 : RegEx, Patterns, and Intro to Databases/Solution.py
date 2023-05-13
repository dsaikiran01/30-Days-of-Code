import re

if __name__ == '__main__':
    N = int(input())
    
    final = []
    
    for N_itr in range(N):
        first_multiple_input = input().split()

        firstName = first_multiple_input[0]
        emailID = first_multiple_input[1]
        
        if re.search(".+@gmail\.com$", emailID):
            final.append(firstName)
    
    final.sort()
    
    for i in final:
        print(i)
