class Person {
    age: number
    constructor(initialAge: number) {
        if (initialAge >= 0) {
            this.age = initialAge;
        } else {
            console.log("Age is not valid, setting age to 0.");
            this.age = 0;
        }
    }

    yearPasses(): void {
        this.age++;
    }

    amIOld(): void {
        if (this.age < 13) {
            console.log("You are young.");
        } else if (this.age >= 13 && this.age < 18) {
            console.log("You are a teenager.");
        } else {
            console.log("You are old.");
        }
    }
}

function main() {
    const T: number = +readLine();
    for (let i = 0; i < T; i++) {
        const age: number = parseInt(readLine());
        const p: Person = new Person(age);
        p.amIOld();
        for (let j = 0; j < 3; j++) {
            p.yearPasses();
        }
        p.amIOld();
        console.log("");
    }
}