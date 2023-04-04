class Person:
	def __init__(self, firstName, lastName, idNumber):
		self.firstName = firstName
		self.lastName = lastName
		self.idNumber = idNumber
	def printPerson(self):
		print("Name:", self.lastName + ",", self.firstName)
		print("ID:", self.idNumber)

class Student(Person):
  
    def __init__(self, firstName, lastName, idNumber, scores):
        super().__init__(firstName, lastName, idNumber)
        self.testScores = scores
        
    def calculate(self):
        totalMarks = 0
        for score in self.testScores:
            totalMarks += score
        
        averageMark = totalMarks / len(self.testScores)
        
        if averageMark >= 90 and averageMark <= 100:
            return 'O'
        if averageMark >= 80 and averageMark < 90:
            return 'E'
        elif averageMark >= 70 and averageMark < 80:
            return 'A'
        elif averageMark >= 55 and averageMark < 70:
            return 'P'
        elif averageMark >= 40 and averageMark < 55:
            return 'D'
        else:
            return 'T'

if __name__ == "__main__":
    line = input().split()
    firstName = line[0]
    lastName = line[1]
    idNum = line[2]
    numScores = int(input())
    scores = list( map(int, input().split()) )
    s = Student(firstName, lastName, idNum, scores)
    s.printPerson()
    print("Grade:", s.calculate())
