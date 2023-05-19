function substitute(input) {
 
    let k = Number(input[0]);
    let l = Number(input[1]);
    let m = Number(input[2]);
    let n = Number(input[3]);
 
    //first number
    for (let a = k; a <= 8; a++) {
        let buff = "";  // ab
        for (let b = 9; b >= l; b--) {
            let firstNumber = a * 10 + b;
 
            // second number 
            for (let c = m; c <= 8; c++) {
                for (let d = 9; d >= n; d--) {
                    let secondNumber = c * 10 + d;
 
 
                    if (a % 2 === 0 && c % 2 === 0 && b % 2 !== 0 && d % 2 !== 0)
 
 
                        if (firstNumber !== secondNumber) {
                            console.log(`${firstNumber} - ${secondNumber}`);
                        }
                    if (firstNumber == secondNumber) {
                        console.log(`Cannot change the same player.`)
                    }
 
 
                }
 
            }
        }
    }
 
}