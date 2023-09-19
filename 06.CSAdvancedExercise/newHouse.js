function newHouse(input){
let type = input[0];
let quantity = Number(input[1]);
let budget = Number(input[2]);
let finalSum = 0;

switch(type){
    case "Roses":
        finalSum = quantity * 5;
        if(quantity > 80){
            finalSum = finalSum * 0.90
        }
        break;
    case "Dahlias":
        finalSum = quantity * 3.80; 
        if(quantity > 90){
            finalSum = finalSum * 0.85
        }
        break;
    case "Tulips":
        finalSum = quantity * 2.80;
        if(quantity > 80){
            finalSum = finalSum * 0.85
        }
        break;
    case "Narcissus":
        finalSum = quantity * 3;
        if(quantity < 120){
            finalSum = finalSum * 1.15
        }
        break;
    case "Gladiolus":
        finalSum = quantity * 2.50;
        if(quantity < 80){
            finalSum = finalSum * 1.20
        }
        break;
}
if(budget >= finalSum){
    console.log(`Hey, you have a great garden with ${quantity} ${type} and ${(budget - finalSum).toFixed(2)} leva left.`);
}else if(finalSum > budget){
    console.log(`Not enough money, you need ${(finalSum - budget).toFixed(2)} leva more.`)
}
}
newHouse(["Roses","55","250"]);
