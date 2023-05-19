function journey (input) {
    let budget = Number(input[0]);
    let season = input[1];

    let destination = "";
    let typeOfJourney = "";
    let moneySpent = 0;

    switch(season) {
        case "summer":
            if(budget <= 100 && season === "summer"){
                destination = "Bulgaria"; 
                typeOfJourney = "Camp";
                moneySpent = budget * 0.3;
            } else if(budget <= 1000 && season === "summer"){
                destination = "Balkans";
                typeOfJourney = "Camp";
                moneySpent = budget * 0.4;
            } else if(budget > 1000 && season === "summer"){
                destination = "Europe";
                typeOfJourney = "Hotel";
                moneySpent = budget * 0.9;
            }
            break;
        case "winter":
            if(budget <= 100 && season === "winter"){
                destination = "Bulgaria"; 
                typeOfJourney = "Hotel";
                moneySpent = budget * 0.7;
            } else if(budget <= 1000 && season === "winter"){
                destination = "Balkans";
                typeOfJourney = "Hotel";
                moneySpent = budget * 0.8;
            } else if(budget > 1000 && season === "winter"){
                destination = "Europe";
                typeOfJourney = "Hotel";
                moneySpent = budget * 0.9;
            }
            break;     
        }   
        console.log(`Somewhere in ${destination}`);
        console.log(`${typeOfJourney} - ${moneySpent.toFixed(2)}`); 
}



journey(["1500", "summer"])