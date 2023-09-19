function toyShop(input) {
let vaction = Number(input[0]);
let puzzles = Number(input[1]);
let dolls = Number(input[2]);
let bears = Number(input[3]);
let minion = Number(input[4]);
let buses = Number(input[5]);

let sumProducts = puzzles * 2.60 + dolls * 3.00 + bears * 4.10 + minion * 8.20 + buses * 2.00;
let countProducts = puzzles + dolls + bears + minion + buses;

if (countProducts >= 50){
    sumProducts = 0.75 * sumProducts
}
 sumProducts = 0.90 * sumProducts
 if (sumProducts >= vaction){
    let diff = sumProducts - vaction;
    console.log(`Yes! ${diff.toFixed(2)} lv left.`)
 }else{
    let diff = vaction - sumProducts;
    console.log(`Not enough money! ${diff.toFixed(2)} lv needed.`)
 }
}

toyShop(["40.8","20","25","30","50","10"]);
