function cleverLilly(input) {
    let lillysAge = Number(input[0]);
    let washingMachinePrice = Number(input[1]);
    let singleToyPrice = Number(input[2]);

    let toysCount = 0;
    let savedMoney = 0;
    let moneyStolen = 0;
    let addMoney = 10;

    for (let currentAge = 1; currentAge <= lillysAge; currentAge++) {
        if (currentAge % 2 === 0) {
            savedMoney += addMoney;
            addMoney += 10;
            moneyStolen++;
        } else {
            toysCount++;
        }
    }
    let moneyFromToys = toysCount * singleToyPrice;
    let totalMoneySaved = savedMoney + moneyFromToys - moneyStolen;

    if (totalMoneySaved >= washingMachinePrice) {
        console.log(`Yes! ${(totalMoneySaved - washingMachinePrice).toFixed(2)}`);
    } else {
        console.log(`No! ${(washingMachinePrice - totalMoneySaved).toFixed(2)}`);
    }
}

cleverLilly