function sumPrimeNonPrime (input) {
    let sumPrime = 0;
    let sumNonPrime = 0;

    let index = 0;
    let command = input[index];
    index++;

    while (command !== 'stop') {
        let curNum = Number(command);

        if (curNum < 0) {
            console.log('Number is negative.');
            command = input[index];
            index++;
            continue; 
        } 
        let isPrime = true;

        for (let divisor = 2; divisor < curNum; divisor++) {
            if (curNum % divisor === 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) {
            sumPrime += curNum;
        } else {
            sumNonPrime += curNum;
        }
        command = input[index];
        index++;
    }
    console.log(`Sum of all prime numbers is: ${sumPrime}`);
    console.log(`Sum of all non prime numbers is: ${sumNonPrime}`);
}

sumPrimeNonPrime(["3",

"9",

"0",

"7",

"19",

"4",

"stop"])