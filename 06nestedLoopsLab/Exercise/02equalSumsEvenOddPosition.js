function equalSumsEvenOddPosition (input) {
    let startNum = Number(input[0]);
    let endNum = Number(input[1]);

    let buffer = '';

    for (let curNum = startNum; curNum <= endNum; curNum++) {
        let curNumAsString = String(curNum)
        let evenPositionSum = 0;
        let oddPositionSum = 0;

        for (let i = 0; i < curNumAsString.length; i++) {
            let curDigit = Number(curNumAsString[i]);
            if (i % 2 === 0) {
                evenPositionSum += curDigit;
            } else {
                oddPositionSum += curDigit;
            }
        }
        if (evenPositionSum === oddPositionSum) {
            buffer += curNumAsString + ' ';
        }
    }
    console.log(buffer);
}

equalSumsEvenOddPosition(["100000", "100050"])