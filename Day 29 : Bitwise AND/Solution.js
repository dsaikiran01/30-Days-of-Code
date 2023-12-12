function bitwiseAnd(N, K) {
    let max = -1;
    for(let i = 1; i <= N; i++){
        for(let j = i+1; j <= N; j++){
            let res = i & j;
            if(res < K && max < res) {
                max = res;
            }
        }
    }
    return max;
}

function main() {
        const firstMultipleInput = readLine().split(' ');

        const count = parseInt(firstMultipleInput[0], 10);

        const lim = parseInt(firstMultipleInput[1], 10);

        const res = bitwiseAnd(count, lim);

        console.log(res);
}

main();
