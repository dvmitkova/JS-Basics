function minNumber(input) {
    let index = 0;
    let n = input[index];
    index++;
    let minNum = Number.MAX_SAFE_INTEGER;

    while (n !== "Stop") {
        let currNum = Number(n);

        if (currNum < minNum) {
            minNum = currNum;
        }

        n = input[index];
        index++;
    }
    console.log(minNum);
}

minNumber(["45", "-20", "7", "99", "Stop"])