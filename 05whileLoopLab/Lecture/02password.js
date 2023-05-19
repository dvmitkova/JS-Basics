function password (input) {
    let username = input[0];
    let password = input[1];
    let index = 2;
    let currPassword = input[index];
    index++;

    while (currPassword !== password) {
        currPassword = input[index];
        index++;
    }
    console.log(`Welcome ${username}!`);
}

password(["Nakov",

"1234",

"Pass",

"1324",

"1234"])