function graduation(input) {

    let student = input[0];
    let grades = 1;
    let total = 0;
    let excluded = 0;
    let index = 0;

    while (grades <= 12) {
        index++;
        let grade = Number(input[index]);
        if(grade < 4){
            excluded++;
        if(excluded > 1){
            console.log(`${student} has been excluded at ${index - 1} grade`);
            continue;
        }
        }
        total += grade;
        grades++;
    }
    if(excluded < 1) {
        console.log(`${student} graduated. Average grade: ${(total / 12).toFixed(2)}`)
    }
}
graduation(["Mimi","5","6","5","6","5","6","6","2","3"]);