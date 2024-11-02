class Difference {
    private _elements: number[];
    maximumDifference: number = 0;

    constructor(arr: number[]) {
        this._elements = arr;
    }

    computeDifference(): void {
        for (let val1 of this._elements) {
            for (let val2 of this._elements) {
                let diff: number = val1 - val2;
                if (diff > this.maximumDifference) {
                    this.maximumDifference = diff;
                }
            }
        }
    }
}

function main() {
    let n: number = +readWord();
    let a: number[] = new Array();

    for (let i: number = 0; i < n; i++) {
        a[i] = +readWord();
    }

    let difference = new Difference(a);
    difference.computeDifference();
    console.log(difference.maximumDifference);
}