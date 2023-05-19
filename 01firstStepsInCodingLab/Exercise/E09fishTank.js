//Един литър вода се равнява на един кубичен дециметър/ 1л=1 дм3/.

function fishTank(input){
    let lenghtCm = Number(input[0]);
    let wightCm = Number(input[1]);
    let heightCm = Number(input[2]);
    let percentTaken = Number(input[3]) / 100;

    let totalWaterAmmountCm = lenghtCm * wightCm * heightCm
    let totalWaterAmmountLitres = totalWaterAmmountCm * (1 / 1000)
    let totalWaterNeeded = totalWaterAmmountLitres - (totalWaterAmmountLitres * percentTaken)

    console.log(totalWaterNeeded)

}
fishTank(["85", "75", "47", "17"])