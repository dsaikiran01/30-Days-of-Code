function factorial(n: number): number {
    if (n === 1) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}

function main() {
    const n: number = parseInt(readLine());
    const result: number = factorial(n);
    console.log(result);
}