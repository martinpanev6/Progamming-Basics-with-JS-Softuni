function foodDelivery(input) {
let chickenMenu = Number(input[0]);
let fishMenu = Number(input[1]);
let veggetarinianMenu = Number(input[2]);

let chickenMenuPrice = chickenMenu * 10.35;
let fishMenuPrice = fishMenu * 12.40;
let veggetarinianMenuPice = veggetarinianMenu * 8.15;

let MenuSum = chickenMenuPrice + fishMenuPrice + veggetarinianMenuPice;
let dessert = 0.20 * MenuSum;

let finalPrice = MenuSum + dessert + 2.50;

console.log(finalPrice);
}

foodDelivery(["2 ", "4 ", "3 "]);