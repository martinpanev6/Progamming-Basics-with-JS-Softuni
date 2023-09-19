function lunchBreak(input) {
let seriesName = input[0];
let lenghtEp = Number(input[1]);
let breakLenght = Number(input[2]);

let lunchTime = breakLenght * (1 / 8);
let chillTime = breakLenght * (1 / 4);
let lastTime = breakLenght - lunchTime - chillTime;

if(lastTime >= lenghtEp){
    let diff = lastTime - lenghtEp;
    console.log(`You have enough time to watch ${seriesName} and left with ${Math.ceil(diff)} minutes free time.`)
}else if(lenghtEp > lastTime){
    let diff = lenghtEp - lastTime;
    console.log(`You don't have enough time to watch ${seriesName}, you need ${Math.ceil(diff)} more minutes.`)
}
}

lunchBreak(["Game of Thrones","60","96"]);