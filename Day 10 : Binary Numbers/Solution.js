function main() {
    let n = parseInt(readLine().trim(), 10);
    let count = 0, no_of_1s = 0;
    while (n > 0) {
        let remainder = n % 2;
        if ( remainder == 1) {
            count++;
            if (count > no_of_1s) {
                no_of_1s = count;
            }
        } else {
            count = 0;
        }
        n = Math.floor(n / 2);
    }
    console.log(no_of_1s);
}

main();
