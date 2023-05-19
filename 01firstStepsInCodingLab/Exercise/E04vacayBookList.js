function vacayBookList(input){
    let bookPages = Number(input[0]);
    let pagesPerHour = Number(input[1]);
    let daysCount = Number(input[2]);

    let totalHours = bookPages / pagesPerHour
    let hoursPerDay = totalHours / daysCount    

    console.log(hoursPerDay)

}

vacayBookList(["432", "15", "4"])