// · Пъзел - 2.60 лв.
// · Говореща кукла - 3 лв.
// · Плюшено мече - 4.10 лв.
// · Миньон - 8.20 лв.
// · Камионче - 2 лв.
// 50+ бр. => 25% отстъпка от общата цена.
// 10% от поръчката - наем на магазина.


function toyShop (input) {
    let puzzlePrice = 2.60;
    let dollPrice = 3.00;
    let bearPrice = 4.10;
    let minionPrice = 8.20;
    let truckPrice = 2.00;

    let vacayPrice = Number(input[0]);
    let puzzleCount = Number(input[1]);
    let dollCount = Number(input[2]);
    let bearCount = Number(input[3]);
    let minionCount = Number(input[4]);
    let truckCount = Number(input[5]);

    let totalToysCount = puzzleCount + dollCount + bearCount + minionCount + truckCount;
    let totalPrice = puzzleCount * puzzlePrice + dollCount * dollPrice + bearCount * bearPrice + minionCount * minionPrice + truckCount * truckPrice;
    
    if (totalToysCount >= 50) {
        totalPrice = totalPrice - (totalPrice* (25 / 100));
    }

    let rentPrice = totalPrice * (10 / 100);
    let moneyEarned = totalPrice - rentPrice;

    if (moneyEarned >= vacayPrice) {
        let moneyLeft = moneyEarned - vacayPrice;
        console.log(`Yes! ${moneyLeft.toFixed(2)} lv left.`);
    } else {
        let moneyNeeded = vacayPrice - moneyEarned;
        console.log(`Not enough money! ${moneyNeeded.toFixed(2)} lv needed.`);
    }
}
toyShop (["320", "8", "2", "5", "5", "1"])