def printArray(array):
    for i in array:
        print(i)

if __name__ == "__main__" :
    n = int(input())
    intArray = [int(i) for i in input().split()]
    strArray = [input() for i in range(n)]

    printArray(intArray)
    printArray(strArray)
