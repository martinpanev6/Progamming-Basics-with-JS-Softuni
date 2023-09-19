function numbers(input){
    let n = Number(input[0]);
    let i = 1;
    let str = ""
    while(i <= n){
        console.log((str + i) + " ");
        i = (i * 2) + 1;
    }
}
numbers([100]);