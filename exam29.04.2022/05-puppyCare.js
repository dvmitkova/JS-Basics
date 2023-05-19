function puppyCare (input) {
    let index = 0;
    let foodBoughtInKg = Number(input[index]);
    index++;
    let command = input[index];
    index++;
    let foodBoughtInGr = 0;
    let totalFoodForPuppy = 0;

    while (command !== 'Adopted') {
        let foodEatenInGrams = Number(command);
        command = input[index];
        index++;
        foodBoughtInGr = foodBoughtInKg * 1000;
        totalFoodForPuppy += foodEatenInGrams;
        }
        if (totalFoodForPuppy <= foodBoughtInGr) {
            let foodLeft = foodBoughtInGr - totalFoodForPuppy;
            console.log(`Food is enough! Leftovers: ${foodLeft} grams.`);
        } else {
            let foodNeeded = totalFoodForPuppy - foodBoughtInGr;
            console.log(`Food is not enough. You need ${foodNeeded} grams more.`);
        }
}

puppyCare(["2",
"999",
"456",
"999",
"999",
"123",
"456",
"Adopted"])


