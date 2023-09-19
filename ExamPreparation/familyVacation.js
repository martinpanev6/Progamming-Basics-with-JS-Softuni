function familyVacation(input) {

    let budget = Number(input[0]);
    let nightsCount = Number(input[1]);
    let nightPrice = Number(input[2]);
    let perOthers = Number(input[3]);

    let allNights = nightsCount * nightPrice;

    if (nightsCount > 7) {
        allNights = allNights * 0.95;
    }
    let otherStuf = (perOthers / 100) * budget;
    let totalSum = ((allNights + otherStuf).toFixed(2));

    if (budget >= totalSum) {
        console.log(`Ivanovi will be left with ${(budget - totalSum).toFixed(2)} leva after vacation.`)
    } else if (totalSum > budget) {
        console.log(`${(totalSum - budget).toFixed(2)} leva needed.`)
    }
}

familyVacation([800.50, 8, 100 ,2])