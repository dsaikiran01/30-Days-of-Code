function bitwiseAnd(N: number, K: number): number {
    let max: number = 0;

    for (let i: number = 1; i < N; i++) {
        for (let j: number = i + 1; j <= N; j++) {
            let val: number = i & j;
            if (val > max && val < K) max = val;
        }
    }

    return max;
}