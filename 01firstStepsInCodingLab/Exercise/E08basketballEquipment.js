function basketballEquipment(input){
    let annualTax = Number(input[0]);
    let shoesPrice = annualTax - (annualTax * (40 / 100));
    let clothesPrice = shoesPrice - (shoesPrice * (20 / 100));
    let ballPrice = clothesPrice * (1 / 4);
    let accessoriesPrice = ballPrice * (1 / 5);

    let totalExpenses = annualTax + shoesPrice + clothesPrice + ballPrice + accessoriesPrice

    console.log(totalExpenses)
}
basketballEquipment(["365"])