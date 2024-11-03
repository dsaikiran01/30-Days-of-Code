interface AdvancedArithmetic {
    divisorSum(n: number): number
}

class Calculator implements AdvancedArithmetic {
    static interfaceName = "AdvancedArithmetic";

    divisorSum(n: number): number {
        let sum: number = 0;
        for (let i: number = 1; i <= n; i++) {
            if (n % i === 0) sum += i;
        }
        return sum;
    }
}

function main() {
    const n: number = +readLine();
    const myCalculator: Calculator = new Calculator();
    const sum: number = myCalculator.divisorSum(n);
    console.log("I implemented: " + (myCalculator.constructor as any).interfaceName);
    console.log(sum);
}