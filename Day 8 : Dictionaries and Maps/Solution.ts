function main() {
    const n: number = +readLine();
    let phoneBook: Map<string, string> = new Map();

    for (let i = 0; i < n; i++) {
        let arr: Array<string> = readLine().split(" ");
        phoneBook.set(arr[0], arr[1]);
    }

    while (true) {
        let name: string = readLine();
        if (name == null) break;
        if (phoneBook.has(name)) {
            console.log(`${name}=${phoneBook.get(name)}`);
        } else {
            console.log("Not found");
        }
    }
}
