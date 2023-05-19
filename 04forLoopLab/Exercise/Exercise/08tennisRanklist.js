function tennisRanklist (input) {
    let index = 0;
    let numberOfMatches = Number(input[index]);
    index++;
    let startingPoints = Number(input[index]);
    index++;
    let curPoints = 0;
    let totalPoints = 0;
    let finalPoints = 0;
    let avgPoints = 0;
    let numOfWins = 0;
    let winnigMatchesPercent = 0;

    for (let i = index; i <= numberOfMatches + 1; i++) {
        let result = input[index];
        index++;

        if (result === "W") {
            curPoints = 2000;
            numOfWins++;
        } else if (result === "F") {
            curPoints = 1200;
        } else if (result === "SF") {
            curPoints = 720;
        }
        totalPoints += curPoints;
    }
    finalPoints = startingPoints + totalPoints;
    avgPoints = (totalPoints / numberOfMatches);
    winnigMatchesPercent = (numOfWins / numberOfMatches) * 100;

    console.log(`Final points: ${Math.floor(finalPoints)}`);
    console.log(`Average points: ${Math.floor(avgPoints)}`);
    console.log(`${winnigMatchesPercent.toFixed(2)}%`);
}

tennisRanklist(["5",

"1400",

"F",

"SF",

"W",

"W",

"SF"])