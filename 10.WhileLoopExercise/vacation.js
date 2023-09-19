function vacation(input) {

    let neededMoney = Number(input[0]);
    let currentMoney = Number(input[1]);
    let spendDays = 0;
    let days = 0;
    let index = 2;
    let currentInput = input[index];

    while (currentMoney < neededMoney){
        days++;
        index++;
        if (currentInput === "spend"){
            spendDays++;
            if(spendDays === 5){
                console.log("You can't save the money.");
                console.log(days);
                break;
            }
            let moneyToSpend = Number(input[index]);
            currentMoney = currentMoney - moneyToSpend;
            if(currentMoney < 0){
                currentMoney = 0;
            }
        }else if (currentInput === "save"){
            spendDays = 0;
            let moneyToSave = Number(input[index]);
            currentMoney = currentMoney + moneyToSave;
        }
        index++;
        currentInput = input[index];
    }
    if (currentMoney >= neededMoney){
        console.log(`You saved the money for ${days} days.`)
    }
}

vacation(["2000","1000","spend","1200","save","2000"]);