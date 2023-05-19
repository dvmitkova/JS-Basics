function trainTheTrainers (input) {
    let juryCount = Number(input[0]);
    let index = 1;
    let command = input[index];
    let presentationsCount = 0;

    let finalAvgGrade = 0;

    while (command !== 'Finish') {
        let presentationName = input[index];
        index++;
        let curAvg = 0;

        for (let i = 1; i <= juryCount; i++) {
            let curGrade = Number(input[index]);
            index++;
            curAvg += curGrade;
        }
        command = input[index];
        presentationsCount ++;
        let avg = curAvg / juryCount;
        finalAvgGrade += avg;
        console.log(`${presentationName} - ${avg.toFixed(2)}.`);
    }   
    let finalPrint = finalAvgGrade / presentationsCount;
    console.log(`Student's final assessment is ${finalPrint.toFixed(2)}.`);
}

trainTheTrainers(["3",

"Arrays",

"4.53",

"5.23",

"5.00",

"Lists",

"5.83",

"6.00",

"5.42",

"Finish"])