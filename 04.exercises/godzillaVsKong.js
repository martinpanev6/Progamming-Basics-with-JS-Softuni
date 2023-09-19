function godzillaVsKong(input) {
let budget = Number(input[0]);
let extraCounts = Number(input[1]);
let outfitPrice = Number(input[2]);

let decor = 0.10 * budget
 if(extraCounts > 150){
    outfitPrice = 0.90 * outfitPrice;
 }
 let finalSum = (extraCounts * outfitPrice) + decor
 if(finalSum > budget){
    let diff = finalSum - budget;
    console.log(`Not enough money!
Wingard needs ${diff.toFixed(2)} leva more.`)
 }else if(budget >= finalSum){
    let diff = budget - finalSum;
    console.log(`Action!
Wingard starts filming with ${diff.toFixed(2)} leva left.`)
 }
}

godzillaVsKong(["20000","120","55.5"]);
