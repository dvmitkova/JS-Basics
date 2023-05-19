function oldBooks (input) {
    let index = 0;
    let bookNeeded = input[index];
    index++;

    let booksChecked = 0;

    let command = input[index];
    index++;

    let isTheBookFound = false;

    while (command !== "No More Books") {
        let curBook = command;

        if (curBook === bookNeeded) {
            isTheBookFound = true;
            break;
        } 
        booksChecked++;
        command = input[index];
        index++
    }
    if (isTheBookFound) {
        console.log(`You checked ${booksChecked} books and found it.`);
    } else {
        console.log("The book you search is not here!");
        console.log(`You checked ${booksChecked} books.`);
    }
}

oldBooks(["Troy",

"Stronger",

"Life Style",

"Troy"])