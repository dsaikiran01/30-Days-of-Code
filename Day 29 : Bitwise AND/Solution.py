def bitwiseAnd(N, K):
    if (K-1 | K) <= N :
        return K-1
    else:
        return K-2

if __name__ == '__main__':
    t = int(input())
    for i in range(t):
        first_multiple_input = input().split()
        count = int(first_multiple_input[0])
        lim = int(first_multiple_input[1])
        res = bitwiseAnd(count, lim)
        print(res)
