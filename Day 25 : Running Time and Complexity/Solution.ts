function main() {
    const n: number = +readLine();

    for (let i: number = 0; i < n; i++) {
        const num: number = +readLine();

        if (num <= 1) {
            console.log("Not prime");
        } else {
            let divisors: number = 1;
            for (let j: number = 2; j <= Math.sqrt(num); j++) {
                if (num % j === 0) {
                    console.log("Not prime");
                    divisors++;
                    break;
                }
            }

            if (divisors === 1) {
                console.log("Prime");
            }
        }
    }
}