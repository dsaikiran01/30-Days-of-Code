function main() {
    const S = readLine();
    try{
        var number = eval(S);
        console.log(number);
    } catch(ReferenceError) {
        console.log("Bad String");
    }
};

main();
