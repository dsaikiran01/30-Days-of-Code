class Person {
    constructor(firstName, lastName, identification) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.idNumber = identification;
    }
    
    printPerson() {
        console.log(
            "Name: " + this.lastName + ", " + this.firstName 
            + "\nID: " + this.idNumber
        )
    }
}

class Student extends Person {
    constructor(firstName, lastName, id, scores) {
        super(firstName, lastName, id);
        this.scores = scores;
    }
    
    calculate() {
        let total = 0;
        let scoreLen = this.scores.length;
        for(let i = 0; i < scoreLen; i++) {
            total += this.scores[i];
        }
        
        total = total / scoreLen;
        
        if(total >= 90 && total <= 100) {
            return "O";
        } else if(total >= 80 && total < 90) {
            return "E";
        } else if (total >= 70 && total < 80) {
            return "A";
        } else if (total >= 55 && total < 70) {
            return "P";
        } else if (total >= 40 && total < 55) {
            return "D";
        } else if (total < 40) {
            return "T";
        }    
    }
}
