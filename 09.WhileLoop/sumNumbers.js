function sumNumbers(input) {

    let totalNumber = Number(input[0]);
    let index = 1;
    let number = Number(input[index]);
    let wholeNumber = 0;
     
    while (index < input.length) {
        wholeNumber += Number(input[index])
        index++;
    }
    console.log(wholeNumber)
}

sumNumbers(["100","10","20","30","40"]);