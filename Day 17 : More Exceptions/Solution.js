class Calculator{
    power = function(n, p) {
        if(n < 0 || p < 0)
            throw "n and p should be non-negative";
        return Math.pow(n, p);
    }
}

function main(){
    var myCalculator=new Calculator();
    var T=parseInt(readLine());
    while(T-- > 0){
        var num = (readLine().split(" "));
        try{
            var n=parseInt(num[0]);
            var p=parseInt(num[1]);
            var ans=myCalculator.power(n,p);
            console.log(ans);
        }
        catch(e){
            console.log(e);
        }
    }
}

main();
