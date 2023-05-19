function petShop(input){
    let dogFoodPrice = 2.50
    let catFoodPrice = 4.00

    let dogFoodTotalExpenses = (input[0]) * dogFoodPrice
    let catFoodTotalExpenses = (input[1]) * catFoodPrice
    let totalFoodExpenses = dogFoodTotalExpenses + catFoodTotalExpenses

    console.log(`${totalFoodExpenses} lv.`)
}

petShop(["13", "9"])