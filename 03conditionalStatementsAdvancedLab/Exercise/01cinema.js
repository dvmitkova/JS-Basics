// · Premiere – премиерна прожекция, на цена 12.00 лева.

// · Normal – стандартна прожекция, на цена 7.50 лева.

// · Discount – прожекция за деца, ученици и студенти на намалена цена от 5.00 лева.

function cinema(input) {
    let movieType = input[0];
    let rows = Number(input[1]);
    let columns = Number(input[2]);

    let totalCount = rows * columns;
    let income = 0;

    switch(movieType) {
        case "Premiere" :
            income = totalCount * 12.00;
            break;
        case "Normal" :
            income = totalCount * 7.50;
            break;
        case "Discount" :
            income = totalCount * 5.00;
            break;
            } 
    console.log(`${income.toFixed(2)} leva`)

}

cinema(["Discount", "12", "30"])