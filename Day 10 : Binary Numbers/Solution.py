if __name__ == '__main__':
    n = int(input().strip())
    count, no_of_1s = 0, 0
    
    while(n > 0):
        if(n % 2 == 1):
            count += 1
            if(count > no_of_1s):
                no_of_1s = count
        else:
            count = 0
        
        n //= 2
    
    print(no_of_1s)
