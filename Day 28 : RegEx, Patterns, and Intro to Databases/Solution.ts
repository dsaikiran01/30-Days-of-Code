function main() {
    const N: number = parseInt(readLine().trim(), 10);
    let names: string[] = [];
    const regex = new RegExp(/[A-Za-z0-9\.]+\@gmail.com$/);
    let count: number = 0;
    for (let NItr: number = 0; NItr < N; NItr++) {
        const firstMultipleInput: string[] = readLine().replace(/\s+$/g, '').split(' ');

        const firstName: string = firstMultipleInput[0];
        const emailID: string = firstMultipleInput[1];

        if (regex.test(emailID)) {
            names[count++] = firstName;
        }
    }

    names.sort();

    for (let name of names) {
        console.log(name);
    }
}
