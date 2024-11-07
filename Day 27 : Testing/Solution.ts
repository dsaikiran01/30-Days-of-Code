function minimum_index(seq: number[]): number {
    if (seq.length == 0) {
        throw new Error("Cannot get the minimum value index from an empty sequence");
    }
    let min_idx: number = 0;
    for (let i: number = 1; i < seq.length; ++i) {
        if (seq[i] < seq[min_idx]) {
            min_idx = i;
        }
    }
    return min_idx;
}

class TestDataEmptyArray {
    get_array(): [] {
        return [];
    }
}

class TestDataUniqueValues {
    get_array(): number[] {
        return new Array(1, 2, 3);
    }

    get_expected_result(): number {
        return 0;
    }
}

class TestDataExactlyTwoDifferentMinimums {
    get_array(): number[] {
        return new Array(2, 1, 3, 5, 1, 6);
    }

    get_expected_result(): number {
        return 1;
    }
}

// testing functions

function TestWithEmptyArray(): void {
    try {
        const obj: TestDataEmptyArray = new TestDataEmptyArray();
        const seq = obj.get_array();
        minimum_index(seq);
    } catch (e) {
        if (e instanceof Error) {
            return;
        }
    }
    throw new Error("Exception wasn't thrown as expected");
}

function TestWithUniqueValues(): void {
    const obj: TestDataUniqueValues = new TestDataUniqueValues();
    const seq = obj.get_array();
    if (seq.length < 2) {
        throw new Error("less than 2 elements in the array");
    }

    const uniqueValues = new Set(seq);
    if (uniqueValues.size !== seq.length) {
        throw new Error("not all values are unique");
    }

    const expected_result = obj.get_expected_result();
    const result = minimum_index(seq);
    if (result !== expected_result) {
        throw new Error("result is different than the expected result");
    }
}

function TestWithExactlyTwoDifferentMinimums(): void {
    const obj: TestDataExactlyTwoDifferentMinimums = new TestDataExactlyTwoDifferentMinimums();
    const seq = obj.get_array();
    if (seq.length < 2) {
        throw new Error("less than 2 elements in the array");
    }

    const tmp = [...seq].sort((a, b) => a - b);
    if (!(tmp[0] === tmp[1] && (tmp.length === 2 || tmp[1] < tmp[2]))) {
        throw new Error("there are not exactly two minimums in the array");
    }

    const expected_result = obj.get_expected_result();
    const result = minimum_index(seq);
    if (result !== expected_result) {
        throw new Error("result is different than the expected result");
    }
}

function main() {
    const t: number = parseInt(readLine().trim(), 10);

    for (let tItr: number = 0; tItr < t; tItr++) {
        const firstMultipleInput: string[] = readLine().replace(/\s+$/g, '').split(' ');

        const n: number = parseInt(firstMultipleInput[0], 10);

        const k: number = parseInt(firstMultipleInput[1], 10);

        const a: number[] = readLine().replace(/\s+$/g, '').split(' ').map(aTemp => parseInt(aTemp, 10));
    }

    TestWithEmptyArray();
    TestWithUniqueValues();
    TestWithExactlyTwoDifferentMinimums();
    console.log("OK");
}