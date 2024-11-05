function main() {
    const n: number = parseInt(readLine().trim(), 10);
    const a: number[] = readLine().replace(/\s+$/g, '').split(' ').map(aTemp => parseInt(aTemp, 10));

    let noOfSwaps: number = 0;

    for (let i: number = 0; i < n; i++) {
        let swaps: number = 0;

        for (let j: number = 0; j < n - 1; j++) {
            if (a[j] > a[j + 1]) {
                let temp = a[j];
                a[j] = a[j + 1];
                a[j + 1] = temp;
                swaps++;
            }
        }

        if (swaps === 0) {
            break;
        }

        noOfSwaps += swaps;
    }

    console.log(`Array is sorted in ${noOfSwaps} swaps.`);
    console.log("First Element:", a[0]);
    console.log("Last Element:", a[n - 1]);
}