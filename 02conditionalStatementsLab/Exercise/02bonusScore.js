//· Ако числото е до 100 включително, бонус точките са 5.
// · Ако числото е по-голямо от 100, бонус точките са 20% от числото.
// · Ако числото е по-голямо от 1000, бонус точките са 10% от числото.
// · Допълнителни бонус точки (начисляват се отделно от предходните):
// o За четно число à + 1 т.
// o За число, което завършва на 5 à + 2 т.
function bonusScore (input) {
    let startScore = Number(input[0]);
    if (startScore <= 100) {
        bonusPoints = 5;
    } else if (startScore < 1000) {
        bonusPoints = startScore * (20 / 100);
    } else if (startScore > 1000) {
        bonusPoints = startScore * (10 / 100);
    }
    if (startScore % 2 === 0) {
        additionalPoints = 1;
    } else if (startScore % 5 === 0) {
        additionalPoints = 2;
    } else (additionalPoints = 0);

    let totalBonusPoints = bonusPoints + additionalPoints
    let bonusScore = startScore + bonusPoints + additionalPoints
    console.log(totalBonusPoints)
    console.log(bonusScore)
}
bonusScore(["15875"])