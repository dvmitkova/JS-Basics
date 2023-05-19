// · Декорът за филма е на стойност 10% от бюджета.
// · При повече от 150 статиста, има отстъпка за облеклото на стойност 10%.

function godzillaVsKong(input) {
    let movieBudget = Number(input[0]);
    let actorsCount = Number(input[1]);
    let clothesPriceForOneActor = Number(input[2]);
    let movieDecorPrice = movieBudget * 0.1;

    if (actorsCount >= 150) {
        clothesPriceForOneActor = clothesPriceForOneActor * 0.9;
    }
    let totalClothesPrice = actorsCount * clothesPriceForOneActor;
    let totalMoviePrice = movieDecorPrice + totalClothesPrice;

    if (totalMoviePrice > movieBudget) {
        let moneyNeeded = totalMoviePrice - movieBudget;
        console.log("Not enough money!");
        console.log(`Wingard needs ${moneyNeeded.toFixed(2)} leva more.`);
    } else if (totalMoviePrice <= movieBudget) {
        let moneyLeft = movieBudget - totalMoviePrice;
        console.log("Action!");
        console.log(`Wingard starts filming with ${moneyLeft.toFixed(2)} leva left.`)
    }
}

godzillaVsKong(["9587.88", "222", "55.68"])