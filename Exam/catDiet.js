function catDiet(input) {

    let fatsCalGram = 9;
    let proteinCalGRam = 4;
    let hydratesCalGram = 4;

    let fatsPer = Number(input[0]);
    let proteinPer = Number(input[1]);
    let hydratesPer = Number(input[2]);
    let totalCal = Number(input[3]);
    let waterPer = Number(input[4]);

    let totalGramsFat = ((fatsPer / 100) * totalCal) / fatsCalGram;
    let totalProteinGram = ((proteinPer / 100) * totalCal) / proteinCalGRam;
    let totalhydratesGram = ((hydratesPer / 100) * totalCal) / hydratesCalGram;

    let foofWeight = totalGramsFat + totalProteinGram + totalhydratesGram;
    let calPerGram = totalCal / foofWeight;

    let totalCalWithoutWater = ((100 - waterPer) / 100) * calPerGram;

    console.log(`${totalCalWithoutWater.toFixed(4)}`)
}

catDiet(["40",
    "40",
    "20",
    "3000",
   "40"])