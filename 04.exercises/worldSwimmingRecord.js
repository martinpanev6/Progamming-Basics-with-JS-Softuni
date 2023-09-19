function worldSwimmingRecord(input){
let recordInSec = Number(input[0]);
let lenghtInM = Number(input[1]);
let timeInSec1M = Number(input[2]);

let timeInSec = lenghtInM * timeInSec1M;
let extraTime = (Math.floor(lenghtInM / 15)) * 12.5;
let totalTime = timeInSec + extraTime;

if (totalTime < recordInSec){
    console.log(`Yes, he succeeded! The new world record is ${totalTime.toFixed(2)} seconds.`)
}else if (totalTime >= recordInSec){
   let diff = totalTime - recordInSec
    console.log(`No, he failed! He was ${diff.toFixed(2)} seconds slower.`)
}
}

worldSwimmingRecord(["10464","1500","20"]);
