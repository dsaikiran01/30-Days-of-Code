from math import sqrt

def notPrime(num: int) -> bool:
    for i in range(2, int(sqrt(num))+1):
        if num % i == 0:
            return True
    return False

if __name__ == "__main__":
    N = int(input())
    for i in range(N):
        num = int(input())
        if num <= 1:
            print("Not prime")
        elif(num > 1 and notPrime(num)):
            print("Not prime")
        else:
            print("Prime")
