function luunchBreak(input){
    let seriesName = input[0];
    let episodeTime = Number(input[1]);
    let breakTime = Number(input[2]);
    let lunchTime = 0.125 * breakTime;
    let relaxTime = 0.25 * breakTime;
    let leftTime = breakTime - (lunchTime + relaxTime);
    if(leftTime >= episodeTime){
        console.log(`You have enough time to watch ${seriesName} and left with ${Math.trunc(leftTime - episodeTime)} minutes`)
    }else if(episodeTime > leftTime){
        console.log(`You don't have enough time to watch ${seriesName}, you need ${Math.trunc(episodeTime - leftTime)} more minutes.`)
    }
}

luunchBreak(["Game of Thrones", "48", "60"]);