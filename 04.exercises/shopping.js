function shopping(input) {
let budget = Number(input[0]);
let videocardsCount = Number(input[1]);
let processorsCount = Number(input[2]);
let ramCount = Number(input[3]);
let videocardsSum = 250 * videocardsCount;
let processorPrice = 0.35 * videocardsSum;
let processorSum = processorPrice * processorsCount;
let ramPrice = 0.10 * videocardsSum;
let ramSum = ramCount * ramPrice;
let totalSum = videocardsSum + processorSum + ramSum;

if(videocardsCount > processorsCount){
    totalSum = 0.85 * totalSum;
}
if(budget >= totalSum){
    let diff = budget - totalSum;
    console.log(`You have ${diff.toFixed(2)} leva left!`)
}else if(totalSum > budget){
    diff = totalSum - budget;
    console.log(`Not enough money! You need ${diff.toFixed(2)} leva more!`)
}
}

shopping(["900","2","1","3"]);
