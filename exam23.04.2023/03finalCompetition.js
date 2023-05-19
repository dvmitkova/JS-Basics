function finalCompetition (input) {
    let numberOfDancers = Number(input[0]);
    let pointsWon = Number(input[1]);
    let season = input[2];
    let place = input[3];

    let moneyPrice = 0;
    let totalPrice = 0;
    let expenses = 0;
    let totalPriceAfterExpenses = 0;
    let charity = 0;
    let moneyLeft = 0;
    let moneyLeftPerPerson = 0;
    
    if (place === "Bulgaria") {
        moneyPrice = pointsWon * numberOfDancers;
        totalPrice = moneyPrice;
    } else if (place === "Abroad") {
        moneyPrice = pointsWon * numberOfDancers;
        totalPrice = moneyPrice + (moneyPrice * 0.5);
    } 
    if (season === "summer" && place === "Bulgaria") {
        expenses = totalPrice * 0.05;
    } else if (season === "summer" && place === "Abroad") {
        expenses = totalPrice * 0.10;
    } else if (season === "winter" && place === "Bulgaria") {
        expenses = totalPrice * 0.08;
    } else if (season === "winter" && place === "Abroad") {
        expenses = totalPrice * 0.15    ;
    }
    totalPriceAfterExpenses = totalPrice - expenses;
    charity = totalPriceAfterExpenses * 0.75;
    moneyLeft = totalPriceAfterExpenses - charity;
    moneyLeftPerPerson = moneyLeft / numberOfDancers;

    console.log(`Charity - ${charity.toFixed(2)}`);
    console.log(`Money per dancer - ${moneyLeftPerPerson.toFixed(2)}`);
 }


finalCompetition(["1", "89.5", "summer", "Abroad"])