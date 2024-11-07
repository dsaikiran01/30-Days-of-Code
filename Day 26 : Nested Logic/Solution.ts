function main() {
    const ret: string[] = readLine().split(" ");
    const due: string[] = readLine().split(" ");

    const retDate: number = parseInt(ret[0]);
    const retMonth: number = parseInt(ret[1]);
    const retYear: number = parseInt(ret[2]);

    const dueDate: number = parseInt(due[0]);
    const dueMonth: number = parseInt(due[1]);
    const dueYear: number = parseInt(due[2]);

    if (dueYear === retYear) {
        if (dueMonth === retMonth) {

            if (dueDate >= retDate) {
                console.log(0);
            } else if (dueDate < retDate) {
                console.log(15 * (retDate - dueDate));
            }

        } else if (dueMonth < retMonth) {
            console.log(500 * (retMonth - dueMonth));
        } else {
            console.log(0);
        }

    } else if (dueYear < retYear) {
        console.log(10000);
    } else {
        console.log(0);
    }
}