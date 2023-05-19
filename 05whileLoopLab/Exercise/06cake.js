function cake (input) {
    let index = 0;
    let w = Number(input[index]);
    index++;

    let l = Number(input[index]);
    index++;
    let command = input[index];
    let cakeSize = w * l;
    let isCakeOver = false;
    let onePiece = 1 * 1;
    let totalPieces = cakeSize / onePiece;
    let piecesEaten = 0;
    let totalPiecesEaten = 0;
    while (command !== "STOP") {
        command = input[index];
        index++;
        if (command === "STOP"){
            break;
        }
        piecesEaten = Number(command);
        cakeSize -= piecesEaten;
        totalPiecesEaten += piecesEaten;
        if (cakeSize <= 0) {
            isCakeOver = true;
        }
        if (isCakeOver) {
            break;
        }
        
    }
    if (isCakeOver) {
        let neededPieces = Math.abs(totalPiecesEaten - totalPieces);
        console.log(`No more cake left! You need ${neededPieces} pieces more.`);
    } if (!isCakeOver) {
        let piecesLeft = totalPieces - totalPiecesEaten;
        console.log(`${piecesLeft} pieces are left.`);
    }
}

cake(["10",

"2",

"2",

"4",

"6",

"STOP"])