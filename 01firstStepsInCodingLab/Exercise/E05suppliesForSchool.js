function suppliesForSchool(input){
    let packagePens = 5.80;
    let packageMarkers = 7.20;
    let cleanerPerLitre = 1.20;
    let numberOfPackagePens = Number(input[0]);
    let numberOfPackageMarkers = Number(input[1]);
    let litresForCleaning = Number(input[2]);
    let discountPercent = Number(input[3]) / 100;

    let allMaterialsPrice = (packagePens * numberOfPackagePens) + (packageMarkers * numberOfPackageMarkers) + (cleanerPerLitre * litresForCleaning)
    let totalDiscount = allMaterialsPrice * discountPercent
    let moneyNeeded = allMaterialsPrice - totalDiscount

    console.log(moneyNeeded)

}
suppliesForSchool(["2", "3", "4", "25"])