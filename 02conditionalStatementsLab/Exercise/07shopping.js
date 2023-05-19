function shopping(input) {
    let budget = Number(input[0]);
    let numberOfVideocards = Number(input[1]);
    let numberProcessors = Number(input[2]);
    let numberRamMemory = Number(input[3]);

    let videoCardPrice = 250;
    let processorsPrice = 0.35 * (numberOfVideocards * videoCardPrice);
    let ramMemoryPrice = 0.10 * (numberOfVideocards * videoCardPrice);
    let totalPrice = (numberOfVideocards * videoCardPrice) + (numberProcessors * processorsPrice) + (numberRamMemory * ramMemoryPrice);
    if (numberOfVideocards > numberProcessors) {
        totalPrice = 0.85 * totalPrice;
    }

    if (budget >= totalPrice) {
        let moneyLeft = budget - totalPrice;
        console.log(`You have ${moneyLeft.toFixed(2)} leva left!`);
    } else {
        let moneyNeeded = totalPrice - budget;
        console.log(`Not enough money! You need ${moneyNeeded.toFixed(2)} leva more!`)
    }
}
shopping(["920.45", "3", "1", "1"])