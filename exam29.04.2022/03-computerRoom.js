function computerRoom (input) {
    let month = input[0];
    let numOfHoursSpent = Number(input[1]);
    let numOfPeopleInGroup = Number(input[2]);
    let timeOfDay = input[3];

    let pricePerPerson = 0;
    let totalCostForVisit = 0;

    if (month === 'march' || month === 'april' || month === 'may') {
            switch (timeOfDay) {
                case 'day' :
                    if (numOfPeopleInGroup >= 4 && numOfHoursSpent < 5) {
                        pricePerPerson = 10.50 * 0.9;
                    } else if (numOfPeopleInGroup >= 4 && numOfHoursSpent >= 5) {
                        pricePerPerson = (10.50 * 0.9) * 0.5;                                               
                    } else if (numOfPeopleInGroup < 4 && numOfHoursSpent >= 5) {
                        pricePerPerson = 10.50 * 0.5;
                    } else {
                        pricePerPerson = 10.50;                       
                    }
                   
                case 'night' :
                    if (numOfPeopleInGroup >= 4 && numOfHoursSpent < 5) {
                        pricePerPerson = 8.40 * 0.9;
                    } else if (numOfPeopleInGroup >= 4 && numOfHoursSpent >= 5) {
                        pricePerPerson = (8.40 * 0.9) * 0.5;                                               
                    } else if (numOfPeopleInGroup < 4 && numOfHoursSpent >= 5) {
                        pricePerPerson = 8.40 * 0.5;
                    } else {
                        pricePerPerson = 8.40;                       
                    }
                    
            }
        } else if (month === 'june' || month === 'july' || month === 'august') {
            switch (timeOfDay) {
                case 'day' :
                    if (numOfPeopleInGroup >= 4 && numOfHoursSpent < 5) {
                        pricePerPerson = 12.60 * 0.9;
                    } else if (numOfPeopleInGroup >= 4 && numOfHoursSpent >= 5) {
                        pricePerPerson = (12.60 * 0.9) * 0.5;                                              
                    } else if (numOfPeopleInGroup < 4 && numOfHoursSpent >= 5) {
                        pricePerPerson = 12.60 * 0.5;
                    } else {
                        pricePerPerson = 12.60;                       
                    }
                    
                case 'night' :
                    if (numOfPeopleInGroup >= 4 && numOfHoursSpent < 5) {
                        pricePerPerson = 10.20 * 0.9; 
                    } else if (numOfPeopleInGroup >= 4 && numOfHoursSpent >= 5) {
                        pricePerPerson = (10.20 * 0.9) * 0.5;                                               
                    } else if (numOfPeopleInGroup < 4 && numOfHoursSpent >= 5) {
                        pricePerPerson = 10.20 * 0.5;
                    } else {
                        pricePerPerson = 10.20;                       
                    }
                    
            }
        }
    totalCostForVisit = numOfPeopleInGroup * (numOfHoursSpent * pricePerPerson);
    console.log(`Price per person for one hour: ${pricePerPerson.toFixed(2)}`);
    console.log(`Total cost of the visit: ${totalCostForVisit.toFixed(2)}`);
}

computerRoom(["july",
"5",
"5",
"night"])

