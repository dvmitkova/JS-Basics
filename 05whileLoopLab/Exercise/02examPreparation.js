function examPreparation (input) {
    let index = 0;
    let badGradesNum = Number(input[index]);
    index++;
    
    let command = input[index];
    index++;

    let badGradesCount = 0;
    let gradesCounter = 0;
    let gradesSum = 0;
    let isABreakNeeded = false;
    let taskName = "";

    while (command !== "Enough") {
        taskName = command;
        let curGrade = Number(input[index]);
        index++;

        if (curGrade <= 4) {
            badGradesCount++;
            if (badGradesNum <= badGradesCount) {
                isABreakNeeded = true;
                break;
            }
                    
        }
        gradesCounter++;
        gradesSum += curGrade;

        command = input[index];
        index++;
    }
    if (isABreakNeeded) {
        console.log(`You need a break, ${badGradesCount} poor grades.`);
    } else {
        let avgGrade = gradesSum / gradesCounter;
        console.log(`Average score: ${avgGrade.toFixed(2)}`);
        console.log(`Number of problems: ${gradesCounter}`);
        console.log(`Last problem: ${taskName}`);
    }
}

examPreparation(["3",

"Money",

"6",

"Story",

"4",

"Spring Time",

"5",

"Bus",

"6",

"Enough"])