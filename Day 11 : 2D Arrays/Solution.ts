function main() {
    let arr: number[][] = Array(6);

    for (let i: number = 0; i < 6; i++) {
        arr[i] = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));
    }

    let max: number = -6 * 9, count: number = 0;

    for (let i: number = 0; i < 4; i++) {
        for (let j: number = 0; j < 4; j++) {
            count = arr[i][j] + arr[i][j + 1] + arr[i][j + 2] + arr[i + 1][j + 1] + arr[i + 2][j] + arr[i + 2][j + 1] + arr[i + 2][j + 2];
            if (count > max) {
                max = count;
            }
        }
    }

    console.log(max);
}