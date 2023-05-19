function sumOfNumbers(input) {
    let n = input[0];
    let sum = 0;

    for(let i = 0; i < n.length; i++) {
        let currentN = Number(n[i]);
        sum += currentN;
    }
    console.log(`The sum of the digits is:${sum}`)
}

sumOfNumbers(["1234"])