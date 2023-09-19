function trainTheTrainers(input) {

    let n = Number(input[0]);
    let index = 1;
    let command = input[index];
    let sumGrades = 0;
    let counter = 0;

    while (command !== "Finish") {

        counter++;
        let name = command;
        let curSumGrade = 0;

        for (let i = 1; i <= n; i++) {
            index++;
            let grade = Number(input[index]);
            curSumGrade += grade;

        }
        let tempAvGrade = curSumGrade / n;
        sumGrades += tempAvGrade;
        console.log(`${name} - ${tempAvGrade.toFixed(2)}.`);
        index++;
        command = input[index];
    }
    console.log(`Student's final assessment is ${(sumGrades / counter).toFixed(2)}.`)
}

trainTheTrainers(["2",
    "While-Loop",
    "6.00",
    "5.50",
    "For-Loop",
    "5.84",
    "5.66",
    "Finish"]);