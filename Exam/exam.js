function exam(input) {

    let studentsCount = Number(input[0]);
    let index = 1;
    let totalSum = 0;
    let firstCount = 0;
    let secondCount = 0;
    let thirdCount = 0;
    let fourthCount = 0;

    for (let index = 1; index <= studentsCount; index++) {
        let currentGrade = Number(input[index]);
        totalSum += currentGrade;
        if (currentGrade >= 5.00) {
            firstCount++;
        } else if (currentGrade >= 4.00 && currentGrade <= 4.99) {
            secondCount++;
        } else if (currentGrade >= 3.00 && currentGrade <= 3.99) {
            thirdCount++;
        } else if (currentGrade < 3.00) {
            fourthCount++;
        }
    }
    let firsrPer = (firstCount / studentsCount) * 100;
    let secondPer = (secondCount / studentsCount) * 100;
    let thirdPer = (thirdCount / studentsCount) * 100;
    let fourthPer = (fourthCount / studentsCount) * 100;
    let average = totalSum / studentsCount;

    console.log(`Top students: ${firsrPer.toFixed(2)}%`);
    console.log(`Between 4.00 and 4.99: ${secondPer.toFixed(2)}%`);
    console.log(`Between 3.00 and 3.99: ${thirdPer.toFixed(2)}%`);
    console.log(`Fail: ${fourthPer.toFixed(2)}%`);
    console.log(`Average: ${average.toFixed(2)}`);
}

exam(["6",
    "2",
    "3",
    "4",
    "5",
    "6",
    "2.2"])