// · Ако фигурата е квадрат (square): на следващия ред се чете едно дробно число - дължина на страната му
// · Ако фигурата е правоъгълник (rectangle): на следващите два реда четат две дробни числа - дължините на страните му
// · Ако фигурата е кръг (circle): на следващия ред чете едно дробно число - радиусът на кръга
// · Ако фигурата е триъгълник (triangle): на следващите два реда четат две дробни числа - дължината на страната му и дължината на височината към нея
// Резултатът да се закръгли до 3 цифри след десетичната запетая.
function areaOfFigures(input){
    let figure = input[0];
    if (figure === "square"){
        let sideA = Number(input[1]);
        let area = sideA * sideA;
        console.log(area.toFixed(3));
    } else if (figure === "rectangle"){
        let sideA = Number(input[1]);
        let sideB = Number(input[2]);
        let area = sideA * sideB;
        console.log(area.toFixed(3));
    } else if (figure === "circle"){
        let r = Number(input[1]);
        let area = r * r * Math.PI;
        console.log(area.toFixed(3));
    } else if (figure === "triangle"){
        let sideA = Number(input[1]);
        let hA = Number(input[2]);
        let area = sideA * hA / 2;
        console.log(area.toFixed(3));
    }
}

areaOfFigures(["triangle", "4.5", "20"])