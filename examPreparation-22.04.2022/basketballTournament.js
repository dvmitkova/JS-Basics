function basketballTournament (input) {
    let index = 0;
    let command = input[index];
    index++;
    let winCounter = 0;
    let lostCounter = 0;
    let totalMatches = 0;

    while (command !== 'End of tournaments') {
        let tournamentsName = command;
        let gameNumber = Number(input[index]);
        index++;

        for (let i = 0; i <gameNumber; i++) {
            totalMatches++;
            let teamA = Number(input[index]);
            index++;
            let teamB = Number(input[index]);
            index++;
            if (teamA > teamB) {
                winCounter++;
                console.log(`Game ${i + 1} of tournament ${tournamentsName}: win with ${teamA - teamB} points.`);
            } else {
                lostCounter++;
                console.log(`Game ${i + 1} of tournament ${tournamentsName}: lost with ${teamB - teamA} points.`);
            }
        }
        command = input[index];
        index++;
    }
    console.log(`${(winCounter / totalMatches * 100).toFixed(2)}% matches win`);
    console.log(`${(lostCounter / totalMatches * 100).toFixed(2)}% matches lost`);
}
            

basketballTournament(["Dunkers",
"2",
"75",
"65",
"56",
"73",
"Fire Girls",
"3",
"67",
"34",
"83",
"98",
"66",
"45",
"End of tournaments"])
