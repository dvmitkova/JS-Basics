function repainting(input){
    let nylonPerSquareMetre = 1.50;
    let paintPerLitre = 14.50;
    let paintThinnerPerLitre = 5.00;
    let bags = 0.40;

    let nylonNeeded = Number(input[0]) + 2;
    let paintNeeded = Number(input[1]) + ((10 / 100 * (input[1])));
    let paintThinner = Number(input[2]);
    let workingHours = Number(input[3]);

    let nylonAmmount = nylonNeeded * nylonPerSquareMetre;
    let paintAmmount = paintNeeded * paintPerLitre;
    let paintThinnerAmmount = paintThinnerPerLitre * paintThinner;

    let totalMaterialsAmmount = nylonAmmount + paintAmmount + paintThinnerAmmount + bags;
    let workersSalaryPerHour = totalMaterialsAmmount * (30 / 100);
    let workersTotalSalary = workersSalaryPerHour * workingHours;

    let totalExpenses = totalMaterialsAmmount + workersTotalSalary;

    console.log(totalExpenses)
}

repainting(["5", "10", "10", "1"])