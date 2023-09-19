function foodElivery(input){
    
    let chikenCount = Number(input[0]);
    let fishCount = Number(input[1]);
    let veggieCount = Number(input[2]);

    let chiken = chikenCount * 10.35;
    let fish = fishCount * 12.40;
    let veggie = veggieCount * 8.15;
    
    let sum = chiken + fish + veggie;
    let finalSum = sum + 0.2 * sum + 2.50;
    console.log(finalSum);
}
foodElivery(["2", "4", "3"]);