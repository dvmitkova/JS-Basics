function cleverLily(input) {
    let curAge = Number(input[0]);
    let washerPrice = Number(input[1]);
    let toyPrice = Number(input[2]);
    
    let totalMoneySaved = 0;
    let moneyGiven = 10.00;
    let moneySaved = 0;
    let toysSold = 0;

    for (let i = 1; i <= curAge; i++){
        if (i % 2 === 0) {
            moneySaved += (moneyGiven - 1.00);
            moneyGiven += 10.00;

        } else {
            toysSold += toyPrice;
        }
        totalMoneySaved = moneySaved + toysSold;
    }
    if (washerPrice <= totalMoneySaved) {
        let sumLeft = totalMoneySaved - washerPrice;
        console.log(`Yes! ${sumLeft.toFixed(2)}`);
    } else {
        let sumNeeded = washerPrice - totalMoneySaved;
        console.log(`No! ${sumNeeded.toFixed(2)}`);
    }
}


cleverLily(["10", "170.00", "6"]);