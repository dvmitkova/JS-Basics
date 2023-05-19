function yardGreening(input){
    let oneSquareMeterPrice = 7.61;
    let area = (input[0]);
    let areaPrice = oneSquareMeterPrice * area
    let discount = 18/100 * areaPrice;
    let totalPrice = oneSquareMeterPrice * area - discount ;
   

    console.log(`The final price is: ${totalPrice} lv.`)
    console.log(`The discount is: ${discount} lv.`)

}

yardGreening(["150"])