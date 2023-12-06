function main() {
        const n = parseInt(readLine().trim(), 10);

        const a = readLine().split(' ');

        var numberOfSwaps = 0;
        for (let i = 0; i < n; i++) {
                for (let j = 0; j < n - 1; j++) {
                        if (a[j] > a[j + 1]) {
                                let temp = a[j];
                                a[j] = a[j + 1];
                                a[j + 1] = temp;
                                numberOfSwaps++;
                        }
                }

                if (numberOfSwaps == 0) {
                        break;
                }
        }

        console.log(`Array is sorted in ${numberOfSwaps} swaps.`);
        console.log(`First Element: ${a[0]}`);
        console.log(`Last Element: ${a[a.length - 1]}`);
}

main();
