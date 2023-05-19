function coins (input) {
    let moneyInCoins = Number(input[0]);
    let moneyToReturn = Math.trunc(moneyInCoins * 100);
    
    let coinsCounter = 0;

    while (moneyToReturn > 0) {
        if (moneyToReturn >= 200) {
            moneyToReturn -= 200;              
        } else if (moneyToReturn >= 100) {
            moneyToReturn -= 100;
        } else if (moneyToReturn >= 50) {
            moneyToReturn -= 50;
        } else if (moneyToReturn >= 20) {
            moneyToReturn -= 20;
        } else if (moneyToReturn >= 10) {
            moneyToReturn -= 10;
        } else if (moneyToReturn >= 5) {
            moneyToReturn -= 5;
        } else if (moneyToReturn >= 2) {
            moneyToReturn -= 2;
        } else if (moneyToReturn >= 1) {
            moneyToReturn -= 1;
        } coinsCounter++;

    }
    console.log(coinsCounter);
}

coins (["1.23"])