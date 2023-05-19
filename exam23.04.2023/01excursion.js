function excursion (input) {
    let numOfPeople = Number(input[0]);
    let numOfNightsPerPerson = Number(input[1]);
    let numOfTransportCardsPerPerson = Number(input[2]);
    let museumTicketsPerPerson = Number(input[3]);

    let discount = 0;
    let nightsPrice = numOfNightsPerPerson * 20.00;
    let transportCardsPrice = numOfTransportCardsPerPerson * 1.60;
    let museumTicketsPrice = museumTicketsPerPerson * 6.00;

    let totalPricePerPerson = nightsPrice + transportCardsPrice + museumTicketsPrice;
    let totalPrice = (totalPricePerPerson * numOfPeople) * 1.25;

    console.log(totalPrice.toFixed(2));
}

excursion(["20", "14", "30", "6"])

280
