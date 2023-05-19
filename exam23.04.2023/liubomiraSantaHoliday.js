function santaHoliday(input) {
    let days = Number(input[0]);
    let typeRoom = input[1];
    let ratings = input[2];
    let priceforNight = 0;
    let totalPrice = 0;
 
    if (typeRoom === 'president apartment') {
        priceforNight = 35.00;
        if (days < 10) {
            priceforNight *= 0.9;
        } else if (days < 15) {
            priceforNight *= 0.85;
        } else {
            priceforNight *= 0.8;
        }
    } else if (typeRoom === 'apartment') {
        priceforNight = 25.00;
        if (days < 10) {
            priceforNight *= 0.7;
        } else if (days < 15) {
            priceforNight *= 0.65;
        } else {
            priceforNight *= 0.5;
        }
    } else {
        priceforNight = 18.00;
    }
 
    totalPrice = (days - 1) * priceforNight;
 
    if (ratings === 'positive') {
        totalPrice *= 1.25;
    } else {
        totalPrice *= 0.9;
    }
 
    console.log(`${totalPrice.toFixed(2)}`);
}