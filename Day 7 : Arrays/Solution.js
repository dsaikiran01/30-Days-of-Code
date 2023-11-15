function main() {
    const n = parseInt(readLine().trim(), 10);

    const arr = readLine().spilt();
    
    for(let i = arr.length - 1; i >= 0; i--){
        process.stdout.write(arr[i] + " ");
    }
}

main()l
