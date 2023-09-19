function sequence(input) {
let number = Number(input[0]);
let wholeNumber = 1;
let totalNumber = 0;
 while(wholeNumber <= number){
    console.log(wholeNumber);
    totalNumber = wholeNumber * 2 + 1;
    wholeNumber = totalNumber
 }

}

sequence(["15"]);