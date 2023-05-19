function trekkingMania (input) {
    let index = 0;
    let numOfGroups = Number(input[index]);
    index++;
    let numOfPeopleInGroup = Number(input[index]);
    let group1 = 0;
    let group2 = 0;
    let group3 = 0;
    let group4 = 0;
    let group5 = 0;
    let totalPplInAllGroups = 0;
    let totalPpl = 0;
    for (let i = 1; i <= numOfGroups; i++) {
        numOfPeopleInGroup = Number(input[index]);
        index++;
        totalPpl = numOfPeopleInGroup;
        if (numOfPeopleInGroup <= 5) {
            group1 += totalPpl;
        } else if (numOfPeopleInGroup <= 12) {
            group2 += totalPpl;
        } else if (numOfPeopleInGroup <= 25) {
            group3 += totalPpl;
        } else if (numOfPeopleInGroup <= 40) {
            group4 += totalPpl;
        } else {
            group5 += totalPpl;
        }
        totalPplInAllGroups += totalPpl;
    }
    let group1Percent = (group1 / totalPplInAllGroups) * 100;
    let group2Percent = (group2 / totalPplInAllGroups) * 100;
    let group3Percent = (group3 / totalPplInAllGroups) * 100;
    let group4Percent = (group4 / totalPplInAllGroups) * 100;
    let group5Percent = (group5 / totalPplInAllGroups) * 100;

    console.log(`${group1Percent.toFixed(2)}%`);
    console.log(`${group2Percent.toFixed(2)}%`);
    console.log(`${group3Percent.toFixed(2)}%`);
    console.log(`${group4Percent.toFixed(2)}%`);
    console.log(`${group5Percent.toFixed(2)}%`);
}

trekkingMania(["10",
"10",
"5",
"1",
"100",
"12",
"26", 
"17",
"37", 
"40", 
"78"])