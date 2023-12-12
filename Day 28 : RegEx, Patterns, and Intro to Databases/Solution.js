function main() {
    const N = parseInt(readLine().trim(), 10);
    
    let nameArr = [];
    
    for (let NItr = 0; NItr < N; NItr++) {
        const firstMultipleInput = readLine().split(' ');

        const firstName = firstMultipleInput[0];

        const emailID = firstMultipleInput[1];
        
        let pattern = /[\s]*@gmail.com/g;
        
        if(pattern.test(emailID)){
            nameArr.push(firstName);
        }
    }
    
    nameArr.sort();
    
    for(let i = 0; i < nameArr.length; i++) {
        console.log(nameArr[i]);
    }
}

main();
