function exam (input) {
    let numberOfStudents = Number(input[0]);

    let studentsOver5 = 0;
    let studentsOver4 = 0;
    let studentsOver3 = 0;
    let studentsUnder3 = 0;
    let sumGrades = 0.0;

    for (let i = 1; i <= numberOfStudents; i++) {
        let grade = Number(input[i]);
        if (grade >= 5.00) {
            studentsOver5++;  
            sumGrades += grade;
        } else if (grade >= 4.00 && grade <= 4.99) {
            studentsOver4++;
            sumGrades += grade;
        } else if (grade >= 3.00 && grade <= 3.99) {
            studentsOver3++;
            sumGrades += grade;
        } else if (grade >= 2.00 && grade <= 2.99) {
            studentsUnder3++;
            sumGrades += grade;
        }

    }
    let range1Percent = (studentsOver5 / numberOfStudents) * 100;
    let range2Percent = (studentsOver4 / numberOfStudents) * 100;
    let range3Percent = (studentsOver3 / numberOfStudents) * 100;
    let range4Percent = (studentsUnder3 / numberOfStudents) * 100;

    console.log(`Top students: ${range1Percent.toFixed(2)}%`);
    console.log(`Between 4.00 and 4.99: ${range2Percent.toFixed(2)}%`);
    console.log(`Between 3.00 and 3.99: ${range3Percent.toFixed(2)}%`);
    console.log(`Fail: ${range4Percent.toFixed(2)}%`);
    console.log(`Average: ${(sumGrades / numberOfStudents).toFixed(2)}`);
}

exam(["10", "3.00", "2.99", "5.68", "3.01", "4", "4", "6.00", "4.50", "2.44", "5"])