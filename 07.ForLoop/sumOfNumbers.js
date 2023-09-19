function sumOfNumbers(input) {
    let numbers = input[0];
    let totalValue = 0;
    
    for(let i = 0;i < numbers.length;i++){
       let currentDigit = Number(numbers.charAt(i));
       totalValue += currentDigit;
    }
    console.log(`The sum of the digits is:${totalValue}`);
}

sumOfNumbers(["12674"]);