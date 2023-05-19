function fishingBoat(input) {
    let budget = Number(input[0]);
    let season = input[1];
    let fishersCount = Number(input[2]);

    
    let shipPrice = 0;
    let discount = 0;
    let totalMoney = 0;

    switch(season) {
        case "Spring":
            if(fishersCount <= 6){
                shipPrice = 3000 * 0.90;
            } else if(fishersCount <= 11){
                shipPrice = 3000 * 0.85;
            } else {
                shipPrice = 3000 * 0.75;
            }
            break;
        case "Summer":
            if(fishersCount <= 6){
                shipPrice = 4200 * 0.90;
            } else if(fishersCount <= 11){
                shipPrice = 4200 * 0.85;
            } else {
                shipPrice = 4200 * 0.75;
            }
            break;
            
        case "Autumn":
            if(fishersCount <= 6){
                shipPrice = 4200 * 0.90;
            } else if(fishersCount <= 11){
                shipPrice = 4200 * 0.85;
            } else {
                shipPrice = 4200 * 0.75;
            }
            break;
            
        case "Winter":
            if(fishersCount <= 6){
                shipPrice = 2600 * 0.90;
            } else if(fishersCount <= 11){
                shipPrice = 2600 * 0.85;
            } else {
                shipPrice = 2600 * 0.75;
            }
            break;
    }
    if(season !== "Autumn" && fishersCount % 2 == 0){
        totalMoney = shipPrice * 0.95;
    } else if(season !== "Autumn" && fishersCount % 2 == 1){
        totalMoney = shipPrice;
    } else if(season === "Autumn"){
        totalMoney = shipPrice;
    }

    if(budget >= totalMoney){
        moneyLeft = budget - totalMoney;
        console.log(`Yes! You have ${moneyLeft.toFixed(2)} leva left.`)
    } else if(budget < totalMoney){
        moneyNeeded = totalMoney - budget;
        console.log(`Not enough money! You need ${moneyNeeded.toFixed(2)} leva.`)
    }

}
fishingBoat(["3600",

"Autumn",

"6"])