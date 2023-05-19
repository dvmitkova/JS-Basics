function graduation (input) {
    
    let index = 0;
    let studentName = input[index];
    index++;

    let averageGrade = 0;
    let numOfFails = 0;
    let i = 1; // i = class;
    let gradeExcluded = false;

    while (i <= 12) {
        let grade = Number(input[index]);
        index++;
        if (grade < 4.00) {
            numOfFails++;
            if (numOfFails > 1) {
                gradeExcluded = true;
                console.log(`${studentName} has been excluded at ${i} grade`);
                break;
            }
            continue;
        } 
        averageGrade += grade;
        i++;
    }
    if (!gradeExcluded) {
        console.log(`${studentName} graduated. Average grade: ${(averageGrade / 12).toFixed(2)}`);
    }
}

graduation(["Mimi", "5", "6", "5","6", "5", "6", "6", "2", "3"])