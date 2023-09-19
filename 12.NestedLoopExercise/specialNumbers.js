function specialNumbers(input) {

    let specialNum = Number(input[0]);
    let output = "";
    for(let i = 1; i <= 9; i++){
        for(let k = 1; k <= 9; k++){
            for(let j = 1; j <= 9; j++){
                for(let m = 1; m <= 9; m++){
                    if(specialNum % i == 0 && specialNum % k == 0 && specialNum % j == 0 && specialNum % m == 0){
                        output += `${i}${k}${j}${m} `
                    }
                    
                }
            }
        }
    }
    console.log(output);
}

specialNumbers(["3"]);