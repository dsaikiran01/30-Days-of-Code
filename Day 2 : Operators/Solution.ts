function solve(meal_cost: number, tip_percent: number, tax_percent: number): void {
    // Write your code here
    const tip: number = (tip_percent / 100) * meal_cost;
    const tax: number = (tax_percent / 100) * meal_cost;
    const totalCost: number = tip + tax + meal_cost;
    console.log(totalCost.toFixed(0)); //toFixed() also works
}

function main() {
    const meal_cost: number = parseFloat(readLine().trim());

    const tip_percent: number = parseInt(readLine().trim(), 10);

    const tax_percent: number = parseInt(readLine().trim(), 10);

    solve(meal_cost, tip_percent, tax_percent);
}