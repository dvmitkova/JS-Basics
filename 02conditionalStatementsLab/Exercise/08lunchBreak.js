function lunchBreak(input) {
    let tvSeriesName = input[0];
    let serieTime = Number(input[1]);
    let totalBreakTime = Number(input[2]);

    let lunchTime = totalBreakTime / 8;
    let breakTime = totalBreakTime / 4;
    
    let timeNeededToWatch = totalBreakTime - lunchTime - breakTime;

    if (timeNeededToWatch >= serieTime) {
        let timeLeft = Math.ceil(timeNeededToWatch - serieTime);
        console.log(`You have enough time to watch ${tvSeriesName} and left with ${timeLeft} minutes free time.`)
    } else if (timeNeededToWatch < serieTime){
        let timeNeeded = Math.ceil(serieTime - timeNeededToWatch);
        console.log(`You don't have enough time to watch ${tvSeriesName}, you need ${timeNeeded} more minutes.`)
    }

}
lunchBreak(["Teen Wolf", "48", "60"])