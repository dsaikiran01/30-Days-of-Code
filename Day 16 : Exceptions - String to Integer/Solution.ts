function main() {
    const S: string = readLine();
    try {
        const num: number = parseInt(S);
        if (!isNaN(num)) {
            console.log(num);
        } else {
            throw new Error("Bad String");
        }
    } catch (err) {
        console.log(err.message);
    }
}