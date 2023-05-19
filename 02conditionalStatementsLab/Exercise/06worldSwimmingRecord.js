function worldSwimmingRecord (input) {
    let currentRecordSecs = Number(input[0]);
    let distanceInMeters = Number(input[1]);
    let timeInSecsPerOneMeter = Number(input[2]);
    let waterResistancePer15Meters = 12.5; 

    let timeIvan = distanceInMeters * timeInSecsPerOneMeter;
    let waterResistanceIvan = Math.floor(distanceInMeters / 15) * 12.5;
    totalTimeIvan = timeIvan + waterResistanceIvan;
    
    if (totalTimeIvan < currentRecordSecs) {
        console.log(`Yes, he succeeded! The new world record is ${totalTimeIvan.toFixed(2)} seconds.`)
    } else if (totalTimeIvan >= currentRecordSecs) {
        let secsNeeded = totalTimeIvan - currentRecordSecs;
        console.log(`No, he failed! He was ${secsNeeded.toFixed(2)} seconds slower.`)
    }
}
worldSwimmingRecord(["55555.67", "3017", "5.03"])