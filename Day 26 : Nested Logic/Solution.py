if __name__ == "__main__":
    d1, m1, y1 = input().split()
    d2, m2, y2 = input().split()
    d1, m1, y1 = int(d1), int(m1), int(y1)
    d2, m2, y2 = int(d2), int(m2), int(y2)
    
    if(y1 > y2):
        print(10000)
    elif (y1 < y2):
        print(0)
    elif(y1 == y2):
        if(m1 <= m2):
            if(d1 <= d2):
                print(0)
            else:
                print(abs(15 * (d1 - d2)))
        else:
            print(abs(500 * (m1 - m2)))
