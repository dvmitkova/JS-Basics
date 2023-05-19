function hotelRoom(input){
    let month = input[0];
    let numberOfNights = Number(input[1]);

    let studioPrice = 0;
    let apartmentPrice = 0;
    let totalStudioPrice = numberOfNights * studioPrice;
    let totalApartmentPrice = numberOfNights * apartmentPrice;

    switch(month){
        case "May":
            if(month === "May" && numberOfNights <= 7){
                studioPrice = 50;
                apartmentPrice = 65;
            } else if(month === "May" && numberOfNights > 7 && numberOfNights <= 14){
                studioPrice = 50 * 0.95;
                apartmentPrice = 65;
            } else if(month === "May" && numberOfNights > 14){
                studioPrice = 50 * 0.70;
                apartmentPrice = 65 * 0.90;
            }
            totalStudioPrice = numberOfNights * studioPrice;
            totalApartmentPrice = numberOfNights * apartmentPrice;
        case "June":
            if(month === "June" && numberOfNights <= 14){
                studioPrice = 75.20;
                apartmentPrice = 68.70;
            } else if(month === "June" && numberOfNights > 14){
                studioPrice = 75.20 * 0.80;
                apartmentPrice = 68.70 * 0.90;
            }
            totalStudioPrice = numberOfNights * studioPrice;
            totalApartmentPrice = numberOfNights * apartmentPrice;
        case "July":
            if(month === "July" && numberOfNights <= 14){
                studioPrice = 76;
                apartmentPrice = 77;
            } else if(month === "July" && numberOfNights > 14){
                studioPrice = 76;
                apartmentPrice = 77 * 0.90;
            }
            totalStudioPrice = numberOfNights * studioPrice;
            totalApartmentPrice = numberOfNights * apartmentPrice;
        case "August":
            if(month === "August" && numberOfNights <= 14){
                studioPrice = 76;
                apartmentPrice = 77;
            } else if(month === "August" && numberOfNights > 14){
                studioPrice = 76;
                apartmentPrice = 77 * 0.90;
            }
            totalStudioPrice = numberOfNights * studioPrice;
            totalApartmentPrice = numberOfNights * apartmentPrice;
        case "September":
            if(month === "September" && numberOfNights <= 14){
                studioPrice = 75.20;
                apartmentPrice = 68.70;
            } else if(month === "September" && numberOfNights > 14){
                studioPrice = 75.20 * 0.80;
                apartmentPrice = 68.70 * 0.90;
            }
            totalStudioPrice = numberOfNights * studioPrice;
            totalApartmentPrice = numberOfNights * apartmentPrice;
        case "October":
            if(month === "October" && numberOfNights <= 7){
                studioPrice = 50;
                apartmentPrice = 65;
            } else if(month === "October" && numberOfNights > 7 && numberOfNights <= 14){
                studioPrice = 50 * 0.95;
                apartmentPrice = 65;
            } else if(month === "October" && numberOfNights > 14){
                studioPrice = 50 * 0.70;
                apartmentPrice = 65 * 0.90;
            }
            totalStudioPrice = numberOfNights * studioPrice;
            totalApartmentPrice = numberOfNights * apartmentPrice;
    }
            console.log(`Apartment: ${totalApartmentPrice.toFixed(2)} lv.`)
            console.log(`Studio: ${totalStudioPrice.toFixed(2)} lv.`)
}

hotelRoom(["June",

"14"])