class Printer<T> {
    printArray<T>(arr: T[]): void {
        for (let val of arr) {
            console.log(val);
        }
    }
}

function main() {
    let n: number = +readLine();
    let intArray: number[] = new Array(n);
    for (let i: number = 0; i < n; i++) {
        intArray[i] = +readLine();
    }

    n = +readLine();
    let stringArray = new Array(n);
    for (let i: number = 0; i < n; i++) {
        stringArray[i] = readLine();
    }

    const intPrinter = new Printer<number>();
    const stringPrinter = new Printer<string>();
    intPrinter.printArray(intArray);
    stringPrinter.printArray(stringArray);
    const methods = Object.getOwnPropertyNames(Printer.prototype);

    if (methods.length > 2) {
        console.log("The Printer class should only have 1 method named printArray.");
    }
}