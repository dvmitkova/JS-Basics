function operationsBetweenNumbers(input) {
    let N1 = Number(input[0]);
    let N2 = Number(input[1]);
    let operation = input[2];

    let sum = 0;
    let subtraction = 0;
    let multiplication = 0;
    let division = 0;
    let moduleDivision = 0;

    switch(operation){
        case "+":
            if(operation === "+"){
                sum = N1 + N2;
                if(sum % 2 === 0){
                console.log(`${N1} ${operation} ${N2} = ${sum} - even`);
                } else if(sum % 2 === 1){
                    console.log(`${N1} ${operation} ${N2} = ${sum} - odd`);
                }
            }
        case "-":
            if(operation === "-"){
                subtraction = N1 - N2;
                if(subtraction % 2 === 0){
                    console.log(`${N1} ${operation} ${N2} = ${subtraction} - even`);
                } else if(subtraction % 2 === 1){
                    console.log(`${N1} ${operation} ${N2} = ${subtraction} - odd`);
                }
            } 
        case "*":
            if(operation === "*"){
                multiplication = N1 * N2;
                if(multiplication % 2 === 0){
                    console.log(`${N1} ${operation} ${N2} = ${multiplication} - even`);
                } else if(multiplication % 2 === 1){
                    console.log(`${N1} ${operation} ${N2} = ${multiplication} - odd`);
                }
            }
        case "/":
            if(operation === "/" && N2 != 0){
                division = N1 / N2;
                    console.log(`${N1} ${operation} ${N2} = ${division.toFixed(2)}`);
            } else if(operation === "/" && N2 === 0){
                console.log(`Cannot divide ${N1} by zero`);
            }
        case "%":
            if(operation === "%" && N2 != 0){
                moduleDivision = N1 % N2;
                    console.log(`${N1} ${operation} ${N2} = ${moduleDivision}`);
            } else if(operation === "%" && N2 === 0){
                console.log(`Cannot divide ${N1} by zero`);
            }
        }
    }
operationsBetweenNumbers(["10", "0", "%"])