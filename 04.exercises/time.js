function timee(input) {
let hours = Number(input[0]);
let minutes = Number(input[1]);

let time = hours * 60 + minutes + 15;

let totalH = Math.floor(time / 60);
let totalM = time % 60;

 if(totalH > 23){
    totalH = 0;
 }

 if(totalM < 10){
    console.log(`${totalH}:0${totalM}`)
 }else{
    console.log(`${totalH}:${totalM}`)
 }
}

timee(["1", "46"]);