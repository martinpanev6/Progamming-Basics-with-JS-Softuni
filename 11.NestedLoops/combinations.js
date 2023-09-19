function combinations(input){

    let n = Number(input[0]);
    let validCombinationCount = 0;

    for (let a = 0; a <= n; a++){
        for (let b = 0; b <= n; b++){
            for (let c = 0; c <= n; c++){
                let abc = a + b + c;

                if(abc == n){
                    validCombinationCount++;
                }
            }
        }
    }
    console.log(validCombinationCount)
}

combinations(["20"]);