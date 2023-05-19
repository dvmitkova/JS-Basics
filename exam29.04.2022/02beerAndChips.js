function beerAndChips (input) {
    let name = input[0];
    let budget = Number(input[1]);
    let beerBootlesCount = Number(input[2]);
    let chipsPackagesCount = Number(input[3]);

    let totalMoneyForBeer = beerBootlesCount * 1.20;
    let totalMoneyForChips = chipsPackagesCount * (totalMoneyForBeer * 0.45);
    let totalMoneyPaid = totalMoneyForBeer + Math.ceil(totalMoneyForChips);

    if (totalMoneyPaid <= budget) {
        let moneyLeft = budget - totalMoneyPaid;
        console.log(`${name} bought a snack and has ${moneyLeft.toFixed(2)} leva left.`);
    } else {
        let moneyNeeded = Math.abs(totalMoneyPaid - budget);
        console.log(`${name} needs ${moneyNeeded.toFixed(2)} more leva!`);
    }
}

beerAndChips(["Valentin",
"5",
"2",
"4"])

