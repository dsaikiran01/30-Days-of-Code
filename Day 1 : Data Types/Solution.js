function main() {
    var i = 4
    var d = 4.0
    var s = "HackerRank "
  
    // Declare second integer, double, and String variables.
    var j = parseInt(readLine());
    var e = parseFloat(readLine());
    var t = readLine();

    // Print the sum of both integer variables on a new line.
    console.log(i + j);

    // Print the sum of the double variables on a new line.
    console.log((d + e).toFixed(1));
    
    // Concatenate and print the String variables on a new line
    console.log(s + t);
}

main();
