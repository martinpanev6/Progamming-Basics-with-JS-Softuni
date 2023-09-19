function tradeComissions(input) {
let city = input[0];
let sells = Number(input[1]);
let commision = 0;

if(city == "Sofia"){
    if(sells >= 0 && sells <= 500){
        commision = 0.05 * sells;
        console.log(commision.toFixed(2))
    }else if(sells > 500 && sells <= 1000){
        commision = 0.07 * sells;
        console.log(commision.toFixed(2));
    }else if(sells > 1000 && sells <= 10000){
        commision = 0.08 * sells;
        console.log(commision.toFixed(2));
    }else if(sells > 10000){
        commision = 0.12 * sells;
        console.log(commision.toFixed(2));
    }else if (sells < 0){
        console.log("error")
    }
}else if (city == "Varna"){
    if(sells >= 0 && sells <= 500){
        commision = 0.045 * sells;
        console.log(commision.toFixed(2))
    }else if(sells > 500 && sells <= 1000){
        commision = 0.075 * sells;
        console.log(commision.toFixed(2));
    }else if(sells > 1000 && sells <= 10000){
        commision = 0.1 * sells;
        console.log(commision.toFixed(2));
    }else if(sells > 10000){
        commision = 0.13 * sells;
        console.log(commision.toFixed(2));
    }else if (sells < 0){
        console.log("error")
    }
}else if(city == "Plovdiv"){
    if(sells >= 0 && sells <= 500){
        commision = 0.055 * sells;
        console.log(commision.toFixed(2))
    }else if(sells > 500 && sells <= 1000){
        commision = 0.08 * sells;
        console.log(commision.toFixed(2));
    }else if(sells > 1000 && sells <= 10000){
        commision = 0.12 * sells;
        console.log(commision.toFixed(2));
    }else if(sells > 10000){
        commision = 0.145 * sells;
        console.log(commision.toFixed(2));
    }else if (sells < 0){
        console.log("error")
    }
}else{
    console.log("error")
}
}

tradeComissions(["Sofia","1500"]);
