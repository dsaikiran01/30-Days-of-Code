function processData(input) {
    inputSplitted = input.split("\n");
    for(let i = 1; i < inputSplitted.length; i++) {
         let even = "", odd = "";
        for(let j = 0; j < inputSplitted[i].length; j++) {
            (j % 2 == 0) ? even += inputSplitted[i][j] : odd += inputSplitted[i][j];
        }
        console.log(even, odd);
    }
}

main();
