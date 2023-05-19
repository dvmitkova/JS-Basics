function onTimeForTheExam(input) {
    let examHour = Number(input[0]);
    let examMins = Number(input[1]);
    let arrivalHour = Number(input[2]);
    let arrivalMins = Number(input[3]);

    let totalExamMins = examHour * 60 + examMins;
    let totalArrivalMins = arrivalHour * 60 + arrivalMins;

    let totalDiffTime = Math.abs(totalExamMins - totalArrivalMins);
    let diffHour = Math.floor(totalDiffTime / 60);
    let diffMins = totalDiffTime % 60;

    if (totalExamMins === totalArrivalMins) {
        console.log('On time');
    } else if (totalExamMins < totalArrivalMins) {
        console.log('Late');

        if (totalDiffTime < 60) {
            console.log(`${totalDiffTime} minutes after the start`)
        } else {
            if (diffMins < 10) {
                console.log(`${diffHour}:0${diffMins} hours after the start`);
            } else {
                console.log(`${diffHour}:${diffMins} hours after the start`);
            }
        }
    } else {
        if (totalDiffTime <= 30) {
            console.log('On time');
            console.log(`${totalDiffTime} minutes before the start`);
        } else {
            console.log('Early');
        
            if (totalDiffTime < 60) {
                console.log(`${totalDiffTime} minutes before the start`);
            } else {
                if (diffMins < 10) {
                    console.log(`${diffHour}:0${diffMins} hours before the start`);
                } else {
                    console.log(`${diffHour}:${diffMins} hours before the start`);
                }
            }
        }
    }
}

onTimeForTheExam(["11", "30", "10", "55"])