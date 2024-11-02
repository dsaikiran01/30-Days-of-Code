'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');
let inputString: string = '';
let inputWords: string[] = [];
let currentWord: number = 0;
process.stdin.on('data', function (inputStdin: string): void {
    inputString += inputStdin;
});

process.stdin.on('end', function (): void {
    inputWords = inputString.split(/\s+/).filter(word => word.length > 0);
    inputString = '';
    main();
});

// Function to read the next word
function readWord(): string {
    return inputWords[currentWord++];
}

class Person {
    firstName: string
    lastName: string
    idNumber: number

    constructor(firstName: string, lastName: string, identification: number) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.idNumber = identification;
    }

    printPerson(): void {
        console.log(
            "Name: " + this.lastName + ", " + this.firstName
            + "\nID: " + this.idNumber
        )
    }
}

class Student extends Person {
    scores: number[]

    constructor(firstName: string, lastName: string, idNumber: number, scores: number[]) {
        super(firstName, lastName, idNumber);
        this.scores = scores;
    }

    calculate(): string {
        let sum: number = 0;
        for (let val of this.scores) {
            sum += val;
        }
        const a: number = sum / this.scores.length;

        if (a >= 90 && a <= 100) {
            return "O";
        } else if (a >= 80 && a <= 90) {
            return "E";
        } else if (a >= 70 && a <= 80) {
            return "A";
        } else if (a >= 55 && a <= 70) {
            return "P";
        } else if (a >= 40 && a <= 55) {
            return "D";
        } else if (a < 40) {
            return "T";
        }
    }
}

function main() {
    let firstName: string = readWord();
    let lastName: string = readWord();
    let id: number = +readWord();
    let numScores: number = +readWord();
    let testScores: number[] = new Array();

    for (let i: number = 0; i < numScores; i++) {
        testScores[i] = +readWord();
    }

    let s = new Student(firstName, lastName, id, testScores);
    s.printPerson();
    console.log('Grade: ' + s.calculate());
}