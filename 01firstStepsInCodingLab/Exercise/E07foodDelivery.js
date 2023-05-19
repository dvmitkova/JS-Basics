function foodDelivery(input){
    let chickenMenu = 10.35;
    let fishMenu = 12.40;
    let vegetarianMenu = 8.15;
    let deliveryCost = 2.50;

    let numberChickenMenus = Number(input[0]);
    let numberFishMenus = Number(input[1]);
    let numberVegeterianMenus = Number(input[2]);

    let totalPriceForChickenMenus = numberChickenMenus * chickenMenu;
    let totalPriceForFishMenus = numberFishMenus * fishMenu;
    let totalPriceForVegetarianMenus = numberVegeterianMenus * vegetarianMenu;

    let totalPriceForMenus = totalPriceForChickenMenus + totalPriceForFishMenus + totalPriceForVegetarianMenus;
    let dessertPrice = totalPriceForMenus * (20 / 100);

    let totalCost = totalPriceForMenus + dessertPrice + deliveryCost

    console.log(totalCost)
}
foodDelivery(["2", "4", "3"])