function sumTwoNumbers(input){

    let start = Number(input[0]);
    let end = Number(input[1]);
    let magic = Number(input[2]);
    let flag = false;
    let counter = 0;

    for(let i = start; i <= end; i++){
        for(let j = start; j <= end; j++){
            let sum = i + j;
            counter++;
            if(sum == magic){
                flag = true;
                console.log(`Combination N:${counter} (${i} + ${j} = ${sum})`);
                break;
            }
        }
        if(flag == true){
            break;
        }
    }

    if(flag == false){
        console.log(`${counter} combinations - neither equals ${magic}`)
    }
}

sumTwoNumbers(["88",
"888",
"1000"]);
