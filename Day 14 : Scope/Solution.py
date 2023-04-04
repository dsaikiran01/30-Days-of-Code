class Difference:
    def __init__(self, a):
        self.__elements = a

    def computeDifference(self):
        elements = self.__elements
        difference = 0
        for i in elements :
            for j in elements:
                if abs(i - j) > difference:
                    difference = abs(i - j)
        self.maximumDifference = difference

if __name__ == "__main__":
    _ = input()
    a = [int(e) for e in input().split(' ')]

    d = Difference(a)
    d.computeDifference()

    print(d.maximumDifference)
