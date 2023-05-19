//сума = депозирана сума + срок на депозита * ((депозирана сума * годишен лихвен процент ) / 12)

function depositCalculator(input){
    let depositAmount = Number(input[0]);
    let term = Number(input[1]);
    let annualPercent = Number(input[2])/100;
    let totalAmountAfterTerm = depositAmount + (term * ((depositAmount * annualPercent) / 12))

    console.log(totalAmountAfterTerm)

}

depositCalculator(["2350", "6", "7"])