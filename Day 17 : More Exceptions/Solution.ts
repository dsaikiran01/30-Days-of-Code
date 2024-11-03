class Calculator {
    power(n: number, p: number): number {
        if (n < 0 || p < 0) {
            throw new Error("n and p should be non-negative");
        } else {
            return Math.pow(n, p);
        }
    }
}

function main() {
    var myCalculator: Calculator = new Calculator();
    var T: number = parseInt(readLine());
    while (T-- > 0) {
        var num = (readLine().split(" "));
        try {
            var n: number = parseInt(num[0]);
            var p: number = parseInt(num[1]);
            var ans: number = myCalculator.power(n, p);
            console.log(ans);
        }
        catch (e) {
            console.log(e.message);
        }
    }
}