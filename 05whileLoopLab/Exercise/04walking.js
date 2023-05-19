function walking (input) {
    let goalSteps = 10000;
    let index = 0;
    let command = input[index];
    index++;
    let stepsPerDay = 0;
    let totalSteps = 0;
    let isTheGoalReached = false;
    

    while (totalSteps <= goalSteps) {
        if (command !== "Going home") {
            stepsPerDay = Number(command);
            
            
            totalSteps += stepsPerDay;
            if (totalSteps >= goalSteps) {
                isTheGoalReached = true;
                break;
            }
        } else if (command === "Going home") {
            command = Number(input[index]);
            index++;
            let stepsBackHome = command;
            totalSteps += stepsBackHome;
            if (totalSteps >= goalSteps) {
                isTheGoalReached = true;
            }
            break;
        }   
        command = input[index];
        index++;  
    }
    if (isTheGoalReached) {
        let stepsOverTheGoal = totalSteps - goalSteps;
        console.log("Goal reached! Good job!");
        console.log(`${stepsOverTheGoal} steps over the goal!`);
    } else {
        let stepsUnderTheGoal = Math.abs(goalSteps - totalSteps);
        console.log(`${stepsUnderTheGoal} more steps to reach goal.`);
    }
}

walking(["1500", "3000", "250", "1548", "2000", "Going home", "2000"])