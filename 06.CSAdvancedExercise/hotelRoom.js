function hotelRoom(input){
let month = input[0];
let nightsCount = Number(input[1]);
let studio = 0;
let apartment = 0;

if(month === "May" || month === "October"){
    studio = 50;
    apartment = 65;
   if(nightsCount > 14){
   studio = studio * 0.70;
   }else if(nightsCount > 7){
    studio = studio * 0.95;
   }
}else if(month === "June" || month === "September"){
    studio = 75.20;
    apartment = 68.70;
    if(nightsCount > 14){
        studio = studio * 0.80;
    }
}else if(month === "July" || month === "August"){
    studio = 76;
    apartment = 77;
}

if(nightsCount > 14){
    apartment = apartment * 0.90
}

console.log(`Apartment: ${(apartment * nightsCount).toFixed(2)} lv.`)
console.log(`Studio: ${(studio * nightsCount).toFixed(2)} lv.`)
}

hotelRoom(["May","15"])