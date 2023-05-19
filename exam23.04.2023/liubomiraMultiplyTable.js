function multiplyTable(input) {
    let num = input[0];
    let furstNum = Number(num[2]);
    let secondNum = Number(num[1]);
    let thurdNum = Number(num[0]);
 
 
    for (let i = 1; i <= furstNum; i++) {
        for (let j = 1; j <= secondNum; j++) {
            for (let y = 1; y <= thurdNum; y++) {
                let product = i * j * y;
                console.log(`${i} * ${j} * ${y} = ${product};`);
            }
        }
    }
 
 
}