function operationBetweenNumbers(input){
   let firstNumber = Number(input[0]);
   let secondNumber = Number(input[1]);
   let operator = input[2];
   let sum = 0
   switch(operator){
         case "+":
           sum = firstNumber + secondNumber;
           if (sum % 2 === 0) {
               console.log(`${firstNumber} ${operator} ${secondNumber} = ${sum} - even`);
           } else {
               console.log(`${firstNumber} ${operator} ${secondNumber} = ${sum} - odd`);
           }
           break;
         case "-":
            sum = firstNumber - secondNumber;
           if (sum % 2 === 0) {
               console.log(`${firstNumber} ${operator} ${secondNumber} = ${sum} - even`);
           } else {
               console.log(`${firstNumber} ${operator} ${secondNumber} = ${sum} - odd`);
           }
           break;
         case "*":
            sum = firstNumber * secondNumber;
            if (sum % 2 === 0) {
                console.log(`${firstNumber} ${operator} ${secondNumber} = ${sum} - even`);
            } else {
                console.log(`${firstNumber} ${operator} ${secondNumber} = ${sum} - odd`);
            }
            break;
         case "/":
            sum = firstNumber / secondNumber
            if(secondNumber === 0){
                console.log(`Cannot divide ${firstNumber} by zero`)
            }else{
                console.log(`${firstNumber} ${operator} ${secondNumber} = ${sum.toFixed(2)}`)
            }
            break;
         case "%":
            sum = firstNumber % secondNumber
            if(secondNumber === 0){
                console.log(`Cannot divide ${firstNumber} by zero`)
            }else{
                console.log(`${firstNumber} ${operator} ${secondNumber} = ${sum}`)
            }
            break;
   }
}

operationBetweenNumbers(["15","0","/"])
