function deerOfSanta(input) {

    let offDays = Number(input[0]);
    let leftFoodKil = Number(input[1]);
    let firstDeerFood = Number(input[2]);
    let secondDeerFood = Number(input[3]);
    let thirdDeerFood = Number(input[4]);

    let firstNeed = offDays * firstDeerFood;
    let secondNeed = offDays * secondDeerFood;
    let thirdNeed = offDays * thirdDeerFood;

    let totalNeedFood = firstNeed + secondNeed + thirdNeed;

    if (totalNeedFood <= leftFoodKil) {
        let foodLeft = leftFoodKil - totalNeedFood;
        console.log(`${Math.floor(foodLeft)} kilos of food left.`)
    } else if (totalNeedFood > leftFoodKil) {
        let needFood = totalNeedFood - leftFoodKil;
        console.log(`${Math.ceil(needFood)} more kilos of food are needed.`)
    }
}

deerOfSanta(["5",
    "10",
    "2.1",
    "0.8",
    "11"])