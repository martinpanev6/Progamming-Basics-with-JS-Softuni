function magazine(input){
let productName = input[0];
let town = input[1];
let quantity = Number(input[2]);

let priceTotal = 0

if(town == "Sofia"){
if(productName == 'coffee'){
   priceTotal = 0.5 * quantity
}else if(productName == 'water'){
   priceTotal = 0.8 * quantity
}else if(productName == 'beer'){
   priceTotal = 1.20 * quantity
}else if(productName == 'sweets'){
   priceTotal = 1.45 * quantity
}else if(productName == 'peanuts'){
   priceTotal = 1.6 * quantity
}
}else if(town == "Plovdiv"){
    if(productName == 'coffee'){
        priceTotal = 0.4 * quantity
     }else if(productName == 'water'){
        priceTotal = 0.7 * quantity
     }else if(productName == 'beer'){
        priceTotal = 1.15 * quantity
     }else if(productName == 'sweets'){
        priceTotal = 1.30 * quantity
     }else if(productName == 'peanuts'){
        priceTotal = 1.5 * quantity
     }
}else if(town == "Varna"){
    if(productName == 'coffee'){
        priceTotal = 0.45 * quantity
     }else if(productName == 'water'){
        priceTotal = 0.7 * quantity
     }else if(productName == 'beer'){
        priceTotal = 1.1 * quantity
     }else if(productName == 'sweets'){
        priceTotal = 1.35 * quantity
     }else if(productName == 'peanuts'){
        priceTotal = 1.55 * quantity
     }
}
console.log(priceTotal.toFixed(2));
}

magazine(["coffee","Varna","2"]);