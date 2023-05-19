function programmingBook (input) {
    let onePagePrice = Number(input[0]);
    let oneCoverPrice = Number(input[1]);
    let discountPercent = Number(input[2]);
    let designerSum = Number(input[3]);
    let sumPercentPaydByTheTeam = Number(input[4]);

    let totalPagesPrice = onePagePrice * 899;
    let totalCoverPrice = oneCoverPrice * 2;
    let totalBookPrice = (totalPagesPrice + totalCoverPrice);
    let bookPriceAfterDiscount = totalBookPrice - (totalBookPrice * (discountPercent / 100));
    let expensesPlusDesignerPayment = bookPriceAfterDiscount + designerSum;
    let totalExpensesForAvtonomsBook = expensesPlusDesignerPayment - (expensesPlusDesignerPayment * (sumPercentPaydByTheTeam / 100));

   console.log(`Avtonom should pay ${totalExpensesForAvtonomsBook.toFixed(2)} BGN.`)
}

programmingBook(['0.05',
    '1.20',
    '40',
    '19.99',
    '20'])