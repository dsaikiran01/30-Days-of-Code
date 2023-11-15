function processData(input) {
    inputList = input.split("\n");
    
    const phonebook = {};
    for(let i = 1; i < parseInt(inputList[0]) + 1; i++){
        let entry = inputList[i].split(" ");
        phonebook[entry[0]] = entry[1];
    }
    
    for(let i = parseInt(inputList[0]) + 1; i < inputList.length; i++) {
        if(phonebook[inputList[i]]){
            console.log(inputList[i] + "=" + phonebook[inputList[i]]);
        } else {
            console.log("Not found");
        }
    }
}
