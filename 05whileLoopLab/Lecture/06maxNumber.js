function maxNumber (input) {
    let index = 0;
    let n = input[index];
    index++;
    let maxNum = Number.MIN_SAFE_INTEGER;

    while (n !== "Stop") {
        let currNum = Number(n);

        if (currNum > maxNum) {
            maxNum = currNum;
        }
        
        n = input[index];
        index++;
    }
    console.log(maxNum);
}

maxNumber(["-1", "-2", "Stop"])