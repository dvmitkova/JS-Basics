function salary(input) {
    let openTabs = Number(input[0]);
    let curSalary = Number(input[1]);

    for (let i = 2; i <= openTabs + 2; i++) {
        let curTab = input[i];

        if (curTab === "Facebook") {
            curSalary -= 150;
        } else if (curTab === "Instagram") {
            curSalary -= 100;
        } else if (curTab === "Reddit") {
            curSalary -= 50;
        }
    } if (curSalary <= 0) {
        console.log("You have lost your salary.");
        return;
    } 
    console.log(curSalary);
}

salary(["7",

"750",

"Facebook",

"Dev.bg",

"Instagram",

"Facebook",

"Reddit",

"Facebook",

"Facebook"])