function specialNumbers (input) {
    let n = Number(input[0]);
    let buffer = '';
    let isNumber4Digits = true;

    for (let num = 1111; num <= 9999; num++) {
        let curNumAsString = String(num);
        let finalNum = '';
        
        for (let i = 0; i < curNumAsString.length; i++) {
            let curDigit = Number(curNumAsString[i]);
            
            let curNum = '';
            if (n % curDigit === 0) {
                curNum += curDigit;
            } else if (n % curDigit === 1) {
                isNumber4Digits = false;
            }
            if (!isNumber4Digits) {
                continue;
            }
            finalNum += curNum;
        }
        
        buffer += finalNum + ' ';
        
    }
    console.log(buffer);
}

specialNumbers(["3"])