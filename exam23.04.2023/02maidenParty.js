function maidenParty (input) {
    let maidenPartyPrice = Number(input[0]);
    let numberOfLoveTexts = Number(input[1]);
    let numberOfWaxRoses = Number(input[2]);
    let numberOfKeyHolders = Number(input[3]);
    let numberOfCarricatures = Number(input[4]);
    let numbeOfLuckySurprises = Number(input[5]);

    let numberOfAllArticules = numberOfLoveTexts + numberOfWaxRoses + numberOfKeyHolders + numberOfCarricatures + numbeOfLuckySurprises;
    let discount = 0;
    let totalPrice = 0;
    let totalPriceAfterDiscount = 0;

    let loveTextsPrice = numberOfLoveTexts * 0.60;
    let waxRosesPrice = numberOfWaxRoses * 7.20;
    let keyHoldersPrice = numberOfKeyHolders * 3.60;
    let carricaturesPrice = numberOfCarricatures * 18.20;
    let luckySurprisesPrice = numbeOfLuckySurprises * 22.00;

    if (numberOfAllArticules >= 25) {
        totalPrice = loveTextsPrice + waxRosesPrice + keyHoldersPrice + carricaturesPrice + luckySurprisesPrice;
        discount = totalPrice * 35/100;
        totalPriceAfterDiscount = (totalPrice - discount) * 0.9;
    } else {
        totalPrice = loveTextsPrice + waxRosesPrice + keyHoldersPrice + carricaturesPrice + luckySurprisesPrice;
        discount = 0;
        totalPriceAfterDiscount = (totalPrice - discount) * 0.9; 
    }

    if (totalPriceAfterDiscount >= maidenPartyPrice) {
        console.log(`Yes! ${(totalPriceAfterDiscount - maidenPartyPrice).toFixed(2)} lv left.`);
    } else {
        console.log(`Not enough money! ${(maidenPartyPrice - totalPriceAfterDiscount).toFixed(2)} lv needed.`);
    }
}

maidenParty(["320", "8", "2", "5", "5", "1"])