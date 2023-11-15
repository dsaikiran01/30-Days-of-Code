function solve(meal_cost, tip_percent, tax_percent) {
    const total = meal_cost + (tip_percent / 100 * meal_cost) + (tax_percent / 100 * meal_cost);
    console.log(total.toFixed(0));

}

function main() {
    const meal_cost = parseFloat(readLine().trim());

    const tip_percent = parseInt(readLine().trim(), 10);

    const tax_percent = parseInt(readLine().trim(), 10);

    solve(meal_cost, tip_percent, tax_percent);
}

main();
