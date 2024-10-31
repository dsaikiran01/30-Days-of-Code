function main() {
    const T: number = +readLine();
    
    for(let j = 0; j < T; j++) {
        const str: string = readLine();
        let evenStr: string = "";
        let oddStr: string = "";
        for(let i = 0; i < str.length; i++) {
            if(i % 2 == 0) evenStr += str[i];
            else oddStr += str[i];
        }
        
        console.log(evenStr, oddStr);
    }
}