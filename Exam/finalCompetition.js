function finalCompetition(input) {

    let dancersCount = Number(input[0]);
    let points = Number(input[1]);
    let season = input[2];
    let place = input[3];
    let sum = dancersCount * points;
    let secondSum = 0;

    if (place === "Bulgaria") {
        sum = dancersCount * points;
        if (season === "summer") {
            secondSum = 0.95 * sum;
        } else if (season === "winter") {
            secondSum = 0.92 * sum;
        }
    } else if (place === "Abroad") {
        sum = 1.5 * sum;
        if (season === "summer") {
            secondSum = 0.9 * sum;
        } else if (season === "winter") {
            secondSum = 0.85 * sum;
        }
    }

    let charityMoney = 0.75 * secondSum;
    let finalSum = 0.25 * secondSum;
    let moneyPerPerson = finalSum / dancersCount;

    console.log(`Charity - ${charityMoney.toFixed(2)}`);
    console.log(`Money per dancer - ${moneyPerPerson.toFixed(2)}`);
}

finalCompetition(["1",
    "89.5",
    "summer",
    "Abroad"])