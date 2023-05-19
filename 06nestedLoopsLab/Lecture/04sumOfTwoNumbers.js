function sumOfTwoNumbers (input) {
    let start = Number(input[0]);
    let end = Number(input[1]);
    let magicNumber = Number(input[2]);
    let counter = 0;
    let isCombinationFound = false;
    let firstNumber = 0;
    let secondNumber = 0;
    
    for (let a = start; a <= end; a++) {
        for (let b = start; b <= end; b++) {
            let sum = a + b;
            counter++;
            if (sum === magicNumber) {
                firstNumber = a;
                secondNumber = b;
                isCombinationFound = true;
                break;
            }
        }
        if (isCombinationFound){
            break;
        }
    }
    if (isCombinationFound) {
        console.log(`Combination N:${counter} (${firstNumber} + ${secondNumber} = ${magicNumber})`);
    } else {
        console.log(`${counter} combinations - neither equals ${magicNumber}`);
    }
}

sumOfTwoNumbers(["1",
"10",
"5"])