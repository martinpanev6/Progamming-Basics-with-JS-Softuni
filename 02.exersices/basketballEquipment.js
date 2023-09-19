function basketballEquipment(input) {
let taxes = Number(input[0]);
let shoes = 0.6 * taxes;
let clothes = 0.8 * shoes;
let ball = 0.25 * clothes;
let accessories = 0.2 * ball;
let equipmentFinalSum = taxes + shoes + clothes + ball + accessories;
console.log(equipmentFinalSum);
}

basketballEquipment([365]);