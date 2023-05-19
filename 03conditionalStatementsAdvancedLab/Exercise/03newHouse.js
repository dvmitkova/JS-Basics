function newHouse(input) {
    let flowers = input[0];
    let flowersCount = Number(input[1]);
    let budget = Number(input[2]);

    let moneyForFlowers = 0;
    let moneyLeft = 0;
    let moneyNeeded = 0;

    switch(flowers) {
        case "Roses" :
            if(flowersCount <= 80){
                moneyForFlowers = flowersCount * 5;
            } else if(flowersCount > 80){
                moneyForFlowers = (flowersCount * 5) * 0.9;
            }
            break;
        case "Dahlias" :
            if(flowersCount <= 90){
                moneyForFlowers = flowersCount * 3.80;
            } else if(flowersCount > 90){
                moneyForFlowers = (flowersCount * 3.80) * 0.85;
            }
            break;
        case "Tulips" :
            if(flowersCount <= 80){
                moneyForFlowers = flowersCount * 2.80;
            } else if(flowersCount > 80){
                moneyForFlowers = (flowersCount * 2.80) * 0.85;
            }
            break;
        case "Narcissus" :
            if(flowersCount >= 120){
                moneyForFlowers = flowersCount * 3;
            } else if(flowersCount < 120){
                moneyForFlowers = (flowersCount * 3) * 1.15;
            }
            break;
        case "Gladiolus" :
            if(flowersCount >= 80){
                moneyForFlowers = flowersCount * 2.50;
            } else if(flowersCount < 80){
                moneyForFlowers = (flowersCount * 2.50) * 1.20;
            }
            break;
    }
    if (moneyForFlowers <= budget){
        moneyLeft = budget - moneyForFlowers;
        console.log(`Hey, you have a great garden with ${flowersCount} ${flowers} and ${moneyLeft.toFixed(2)} leva left.`)
    } else if (moneyForFlowers >= budget){
        moneyNeeded = moneyForFlowers - budget;
        console.log(`Not enough money, you need ${moneyNeeded.toFixed(2)} leva more.`)
    }
}

newHouse(["Gladiolus", "64", "160"])