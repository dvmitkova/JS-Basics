function braceletStand(input) {
    let dailyMoney = Number(input[0]);
    let moneyFromSells = Number(input[1]);
    let spends = Number(input[2]);
    let presentPrice = Number(input[3]);
 
    let savedDailyMoney = dailyMoney * 5;
    let savedMoneyFromSells = moneyFromSells * 5;
    let totalMoney = savedDailyMoney + savedMoneyFromSells;
    let restMoney = totalMoney - spends;
    if (restMoney >= presentPrice) {
        console.log(`Profit: ${restMoney.toFixed(2)} BGN, the gift has been purchased.`);
    } else {
        console.log(`Insufficient money: ${(presentPrice - restMoney).toFixed(2)} BGN.`);
    }
}