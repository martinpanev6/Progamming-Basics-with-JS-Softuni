function walking(input) {

    let targetSteps = 10000;
    let sumSteps = 0;
    let index = 0;
    let currentSteps = input[index];

    while (currentSteps !== "Going home"){
        let steps = Number(currentSteps);
        sumSteps += steps;
        if(sumSteps >= targetSteps){
            console.log(`Goal reached! Good job!`);
            console.log(`${sumSteps - targetSteps} steps over the goal!`);
            break;
        }
        index++;
        currentSteps = input[index];
    }

    if (currentSteps === "Going home"){
        let stepsToHome = Number(input[index + 1]);
        sumSteps += stepsToHome;
        if(sumSteps >= targetSteps){
            console.log(`Goal reached! Good job!`);
            console.log(`${sumSteps - targetSteps} steps over the goal!`);
        }else{
            console.log(`${targetSteps - sumSteps} more steps to reach goal.`)
        }    
    }
}

walking(["1000","1500","2000","6500"]);