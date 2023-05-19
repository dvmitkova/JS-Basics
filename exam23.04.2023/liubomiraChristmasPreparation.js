function christmasPreparation(input) {
    let paperRolls = Number(input[0]);
    let fabricRolls = Number(input[1]);
    let literGlue = Number(input[2]);
    let discount = Number(input[3]);
 
    let paperRollsPrice = paperRolls * 5.80;
    let fabricRollsPrice = fabricRolls * 7.20;
    let literGluePrice = literGlue * 1.20;
    let sum = paperRollsPrice + fabricRollsPrice + literGluePrice;
    let total = sum - (sum * discount / 100);
    console.log(total.toFixed(3));
}