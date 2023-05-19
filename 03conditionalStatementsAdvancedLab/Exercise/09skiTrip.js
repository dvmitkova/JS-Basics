function skiTrip(input) {
    let days = Number(input[0]);
    let typeOfRoom = input[1];
    let rating = input[2];

    let nights = days - 1;
    let roomForOnePersonPrice = 0;
    let apartmentPrice = 0;
    let presidentApartmentPrice = 0;
    let discount = 0;
    let totalPrice = 0;
    let totalPriceAfterDiscount = 0;

    switch(typeOfRoom) {
        case 'room for one person' :
            if (days > 0 && days < 365) {
                totalPrice = nights * 18.00;
            }
                break;
        case 'apartment' :
            if (days < 10) {
                totalPrice = nights * (25.00 * 0.70);
            } else if (days >= 10 && days < 15) {
                totalPrice = nights * (25.00 * 0.65);
            } else {
                totalPrice = nights * (25.00 * 0.50);
            }
            break;
        case 'president apartment' :
            if (days < 10) {
                totalPrice = nights * (35.00 * 0.90);
            } else if (days >= 10 && days < 15) {
                totalPrice = nights * (35.00 * 0.85);
            } else {
                totalPrice = nights * (35.00 * 0.80);
            }
            break;
        }
    if (rating === 'positive') {
                discount = totalPrice * 0.25;
                totalPriceAfterDiscount = totalPrice + discount;
    } else if (rating === 'negative') {
                discount = totalPrice * 0.10;
                totalPriceAfterDiscount = totalPrice - discount;
            }
    console.log(totalPriceAfterDiscount.toFixed(2));   
}


skiTrip(["2", "apartment", "positive"])