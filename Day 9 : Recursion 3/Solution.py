def factorial(n):
    # Write your code here
    if n != 1: return n * factorial(n - 1)
    else : return 1

if __name__ == '__main__':
    n = int(input().strip())
    print(factorial(n))
