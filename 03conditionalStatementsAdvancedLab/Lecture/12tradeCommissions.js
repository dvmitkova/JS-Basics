function tradeCommissions(input) {
    let town = input[0];
    let sellsVolume = Number(input[1]);
    let commission = 0;
    
    if(town === "Sofia") {
        if(sellsVolume >= 0 && sellsVolume <= 500) {
            let commission = sellsVolume * 0.05;
            console.log(commission.toFixed(2));
        } else if(sellsVolume > 500 && sellsVolume <= 1000) {
            let commission = sellsVolume * 0.07;
            console.log(commission.toFixed(2));
        } else if(sellsVolume > 1000 && sellsVolume <= 10000) {
            let commission = sellsVolume * 0.08;
            console.log(commission.toFixed(2));
        } else if(sellsVolume > 10000) {
            let commission = sellsVolume * 0.12;
            console.log(commission.toFixed(2));
        } else {
            console.log("error");
        }
    } else if(town === "Varna") {
        if(sellsVolume >= 0 && sellsVolume <= 500) {
            let commission = sellsVolume * 0.045;
            console.log(commission.toFixed(2));
        } else if(sellsVolume > 500 && sellsVolume <= 1000) {
            let commission = sellsVolume * 0.075;
            console.log(commission.toFixed(2));
        } else if(sellsVolume > 1000 && sellsVolume <= 10000) {
            let commission = sellsVolume * 0.1;
            console.log(commission.toFixed(2));
        } else if(sellsVolume > 10000) {
            let commission = sellsVolume * 0.13;
            console.log(commission.toFixed(2));
        } else {
            console.log("error");
        }
    } else if(town === "Plovdiv") {
        if(sellsVolume >= 0 && sellsVolume <= 500) {
            let commission = sellsVolume * 0.055;
            console.log(commission.toFixed(2));
        } else if(sellsVolume > 500 && sellsVolume <= 1000) {
            let commission = sellsVolume * 0.08;
            console.log(commission.toFixed(2));
        } else if(sellsVolume > 1000 && sellsVolume <= 10000) {
            let commission = sellsVolume * 0.12;
            console.log(commission.toFixed(2));
        } else if(sellsVolume > 10000) {
            let commission = sellsVolume * 0.145;
            console.log(commission.toFixed(2));
        } else {
            console.log("error");
        }
    } else {
        console.log("error");
    }
}

tradeCommissions(["Kaspichan", "-50"])