function vacation (input) {
    let index = 0;
    let moneyNeeded = Number(input[index]);
    index++;
    let curMoney = Number(input[index]);
    index++;
    let spendCounter = 0;
    let isItPossibleToSaveTheMoney = true;
    let daysCount = 0;

    while (curMoney < moneyNeeded) {
        let action = input[index];
        index++;
        let sum = Number(input[index]);
        index++;   
        daysCount++;

        switch (action) {
            case "save":
                curMoney += sum;
                spendCounter = 0;
                break;
            case "spend":
                spendCounter++;
                curMoney -= sum;
                if (curMoney <= 0) {
                    curMoney = 0;
                } 
                if (spendCounter === 5) {
                    isItPossibleToSaveTheMoney = false;
                }
                break;
        }
        if (!isItPossibleToSaveTheMoney) {
            break;
        }
    } if (isItPossibleToSaveTheMoney) {
        console.log(`You saved the money for ${daysCount} days.`);
    } else {
        console.log("You can't save the money.");
        console.log(`${daysCount}`);
    }
}

vacation(["250",

"150",

"spend",

"50",

"spend",

"50",

"save",

"100",

"save",

"100"])