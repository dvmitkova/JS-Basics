function catFood (input) {
    let numOfCats = Number(input[0]);
    let group1 = 0;
    let group2 = 0;
    let group3 = 0;
    let totalGramsPerDay = 0;
    let moneyForFoodPerDay = 0;

    for (let i = 1; i <= numOfCats; i++) {
        let gramsOfFood = Number(input[i]);
        totalGramsPerDay += gramsOfFood;      
        
        if (gramsOfFood >= 100 && gramsOfFood < 200){
            group1++;

        } else if (gramsOfFood >= 200 && gramsOfFood < 300) {
            group2++;

        } else if (gramsOfFood >= 300 && gramsOfFood < 400) {
            group3++;

        }
    }
    moneyForFoodPerDay = (totalGramsPerDay / 1000) * 12.45;
    console.log(`Group 1: ${group1} cats.`);
    console.log(`Group 2: ${group2} cats.`);
    console.log(`Group 3: ${group3} cats.`);
    console.log(`Price for food per day: ${moneyForFoodPerDay.toFixed(2)} lv.`);
}

catFood(["7",
"100",
"200",
"342",
"300",
"234",
"123",
"212"])


