function exam(input) {
    let sumGrades = 0.0;
    let topStudents = 0;
    let between4and5 = 0;
    let between3and4 = 0;
    let failStudents = 0;
    let students = Number(input[0]);
 
    for (let i = 1; i <= students; i++) {
        let grade = Number(input[i])
        if (grade < 3) {
            failStudents++;
        } else if (grade < 4) {
            between3and4++;
        } else if (grade < 5) {
            between4and5++;
        } else if (grade <= 6) {
            topStudents++;
        }
        sumGrades += grade;
    }
 
    console.log(`Top students: ${(topStudents / students * 100).toFixed(2)}%`);
    console.log(`Between 4.00 and 4.99: ${(between4and5 / students * 100).toFixed(2)}%`);
    console.log(`Between 3.00 and 3.99: ${(between3and4 / students * 100).toFixed(2)}%`);
    console.log(`Fail: ${(failStudents / students * 100).toFixed(2)}%`);
    console.log(`Average: ${(sumGrades / students).toFixed(2)}`);
}

exam(["10", "3.00", "2.99", "5.68", "3.01", "4", "4", "6.00", "4.50", "2.44", "5"])