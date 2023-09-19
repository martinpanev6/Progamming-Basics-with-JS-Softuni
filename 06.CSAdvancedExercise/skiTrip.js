function skiTrip(input) {
let days = Number(input[0]);
let typeRoom = input[1];
let review = input[2];
let nights = days - 1;
let sum = 0;

if(days < 10){
    if(typeRoom === "room for one person"){
        sum = 18 * nights;
    }else if(typeRoom === "apartment"){
        sum = 0.7 * (25 * nights)
    }else if(typeRoom === "president apartment"){
        sum = 0.9 * (35 * nights)
    }
}else if(days >= 10 && days <= 15){
    if(typeRoom === "room for one person"){
        sum = 18 * nights;
    }else if(typeRoom === "apartment"){
        sum = 0.65 * (25 * nights)
    }else if(typeRoom === "president apartment"){
        sum = 0.85 * (35 * nights)
    }
}else if(days > 15){
    if(typeRoom === "room for one person"){
        sum = 18 * nights;
    }else if(typeRoom === "apartment"){
        sum = 0.5 * (25 * nights)
    }else if(typeRoom === "president apartment"){
        sum = 0.8 * (35 * nights)
    }
}

if(review === "positive"){
    sum = sum * 1.25
}else if(review === "negative"){
    sum = sum * 0.9
}
console.log(sum.toFixed(2));
}
skiTrip (["14","apartment","positive"]);
