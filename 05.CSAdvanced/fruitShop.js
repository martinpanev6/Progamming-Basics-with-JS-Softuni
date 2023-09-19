function fruitShop(input) {
let fruit = input[0];
let day = input[1];
let quantity = Number(input[2]);
let totalPrice = 0;
if (day == "Monday"|| day == "Tuesday"|| day == "Wednesday" || day == "Thursday"|| day == "Friday"){
    if(fruit == "banana"){
        totalPrice = 2.50 * quantity
        console.log(totalPrice.toFixed(2));
    }else if(fruit == "apple"){
        totalPrice = 1.20 * quantity
        console.log(totalPrice.toFixed(2));
    }else if(fruit == "orange"){
        totalPrice = 0.85 * quantity
        console.log(totalPrice.toFixed(2));
    }else if(fruit == "grapefruit"){
        totalPrice = 1.45 * quantity
        console.log(totalPrice.toFixed(2));
    }else if(fruit == "kiwi"){
        totalPrice = 2.70 * quantity
        console.log(totalPrice.toFixed(2));
    }else if(fruit == "pineapple"){
        totalPrice = 5.50 * quantity
        console.log(totalPrice.toFixed(2));
    }else if(fruit == "grapes"){
        totalPrice = 3.85 * quantity
        console.log(totalPrice.toFixed(2));
    }else{
        console.log("error")
    }
}else if(day == "Saturday"|| day == "Sunday"){
    if(fruit == "banana"){
        totalPrice = 2.70 * quantity
        console.log(totalPrice.toFixed(2));
    }else if(fruit == "apple"){
        totalPrice = 1.25 * quantity
        console.log(totalPrice.toFixed(2));
    }else if(fruit == "orange"){
        totalPrice = 0.90 * quantity
        console.log(totalPrice.toFixed(2));
    }else if(fruit == "grapefruit"){
        totalPrice = 1.60 * quantity
        console.log(totalPrice.toFixed(2));
    }else if(fruit == "kiwi"){
        totalPrice = 3.00 * quantity
        console.log(totalPrice.toFixed(2));
    }else if(fruit == "pineapple"){
        totalPrice = 5.60 * quantity
        console.log(totalPrice.toFixed(2));
    }else if(fruit == "grapes"){
        totalPrice = 4.20 * quantity
        console.log(totalPrice.toFixed(2));
    }else{
        console.log("error")
    }
}else{
    console.log("error")
}
}

fruitShop(["orange",
"gv",
"3"]);
