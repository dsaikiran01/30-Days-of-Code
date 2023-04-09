if __name__ == '__main__':
    n = int(input())

    a = list(map(int, input().split()))

    numberOfSwaps = 0
    for i in range(n):
        for j in range(n-1):
            if a[j] > a[j+1]:
                a[j], a[j+1] = a[j+1], a[j]
                numberOfSwaps += 1
        
        if numberOfSwaps == 0:
            break
    
    print(f"Array is sorted in {numberOfSwaps} swaps.")
    print("First Element:", a[0])
    print("Last Element:", a[-1])
