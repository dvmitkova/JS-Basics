function timePlus15Minutes (input) {
    let currentHour = Number(input[0]);
    let currentMins = Number(input[1]);

    let hoursToMinutes = currentHour * 60;
    let totalMinutes = hoursToMinutes + currentMins + 15;
    
    let totalHours = Math.floor(totalMinutes / 60);
    let totalMins = totalMinutes % 60;

    if (totalHours == 24) {
        totalHours = 0;
    }

    if (totalMins < 10) {
        console.log(`${totalHours}:0${totalMins}`);
    } else {
        console.log(`${totalHours}:${totalMins}`);
    }
}



timePlus15Minutes(["11", "08"])