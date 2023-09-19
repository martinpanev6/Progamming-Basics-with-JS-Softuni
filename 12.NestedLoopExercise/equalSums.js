function equalsSum(input){

    let firstNum = Number(input[0]);
    let secNum = Number(input[1]);
    let printLine = ""

    for(let i = firstNum; i <= secNum; i++){
        let currentNum = "" + i;
        let oddSum = 0;
        let evenSum = 0;
        for(let j = 0; j <= currentNum.length; j++){
            let curDigit = Number(currentNum.charAt(j));
            if(j % 2 === 0){
                evenSum += curDigit;
            }else{
                oddSum += curDigit;
            }
        }
        if(oddSum === evenSum){
            printLine += `${i} `
        }
    }
    console.log(printLine);
}

equalsSum(["100000","100050"]);