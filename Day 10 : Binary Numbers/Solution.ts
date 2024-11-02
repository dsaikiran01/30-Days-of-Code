function main() {
    let m: number = parseInt(readLine().trim(), 10);

    let count: number = 0;
    let max_count: number = 0;

    while (m > 0) {
        if (m % 2 == 1) {
            count++;
            if (count > max_count) {
                max_count = count;
            }
        } else {
            count = 0;
        }
        m = Math.floor(m / 2);
    }

    console.log(max_count);
}