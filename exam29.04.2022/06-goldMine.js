function goldMine(input) {
    let index = 0;
    let numberOfLocations = Number(input[index]);
    index++;

    let expectedKgPerDay = 0;
    let numOfDaysPerLocation = 0;

    for (let i = 0; i < numberOfLocations; i++) {
        expectedKgPerDay = Number(input[index]);
        index++;
        numOfDaysPerLocation = Number(input[index]);
        index++;
        let kgPerLocation = 0;

        for (let j = 0; j < numOfDaysPerLocation; j++) {
            let kgPerDay = Number(input[index]);
            index++;
            kgPerLocation += kgPerDay;


        }

        let avgKgPerLocation = kgPerLocation / numOfDaysPerLocation;
        let diff = Math.abs(expectedKgPerDay - avgKgPerLocation);
        if (expectedKgPerDay <= avgKgPerLocation) {
            console.log(`Good job! Average gold per day: ${avgKgPerLocation.toFixed(2)}.`);
        } else {
            console.log(`You need ${diff.toFixed(2)} gold.`);
        }
    }

}

goldMine(["2",
    "10",
    "3",
    "10",
    "10",
    "11",
    "20",
    "2",
    "20",
    "10"])


