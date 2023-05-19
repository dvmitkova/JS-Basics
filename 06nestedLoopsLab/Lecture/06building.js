function building (input) {
    let floor = Number(input[0]);
    let roomsPerFloor = Number(input[1]);

    for (let curFloor = floor; curFloor > 0; curFloor--) {
        let buff = '';
        for(let curRoom = 0; curRoom < roomsPerFloor; curRoom++) {
            if (curFloor === floor) {
                buff += `L${curFloor}${curRoom} `
            } else if (curFloor % 2 === 0) {
                buff += `O${curFloor}${curRoom} `
            } else {
                buff += `A${curFloor}${curRoom} `
            }
        } 
        console.log(buff);
    }
}
 
building(["6", "4"])