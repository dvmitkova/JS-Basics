function moving (input) {
    let index = 0;
    let w = Number(input[index]);
    index++;
    let l = Number(input[index]);
    index++;
    let h = Number(input[index]);
    index++;
    let command = input[index];
    index++;
    let boxSize = 1;
    let totalBoxesSize = 0;
    let totalSizeTaken = 0;
    let isRoomSizeTaken = false;
    let roomSize = w * l * h;
    let freeSpace = 0;
    
    while (command !== "Done") {
        let numberOfBoxes = Number(command);
        totalBoxesSize = numberOfBoxes * boxSize;
        roomSize -= totalBoxesSize;
        if (roomSize >= totalSizeTaken) {
            freeSpace = roomSize - totalSizeTaken;
        } else if (totalSizeTaken > roomSize) {
            isRoomSizeTaken = true;
            break;
        } 
        command = input[index];
        index++;
    }
    if (!isRoomSizeTaken) {
        console.log(`${freeSpace} Cubic meters left.`);
    } else if (isRoomSizeTaken) {
        let sizeNeeded = Math.abs(totalSizeTaken - roomSize);
        console.log(`No more free space! You need ${sizeNeeded} Cubic meters more.`);
    }
}

moving(["10",

"10",

"2",
"20", "20", "20", "20", "122"])