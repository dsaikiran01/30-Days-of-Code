function processData(input) {
        var arr = input.split("\n");
        for(let i = 1; i <= parseInt(arr[0]); i++){
            let ele = parseInt(arr[i]);
            if(ele <= 1) {
                console.log("Not prime");
            } else {
                let divisors = 1;
                for(let j = 2; j <= Math.sqrt(ele); j++) {
                    if(ele % j == 0){
                        console.log("Not prime");
                        divisors++;
                        break;
                    }
                }
                if(divisors == 1)
                    console.log("Prime");
            }
        }
    } 
    
processData(input.readline());
