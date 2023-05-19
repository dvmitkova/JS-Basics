function numberPyramid (input) {
    let n = Number(input[0]);
    let buffer = '';
    let isNumBigger = false;
    let curNum = 1;

    for (let rows = 1; rows <= n; rows++) {
        for (let columns = 1; columns <= rows; columns++) {
            if (curNum > n) {
                isNumBigger = true;
                break;
            }
            buffer += curNum + ' ';
            curNum++;
        }
        console.log(buffer);
        buffer = '';
        if (isNumBigger) {
            break;
        }
    }
}

numberPyramid(["15"])