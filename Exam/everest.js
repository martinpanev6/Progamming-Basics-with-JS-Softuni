function everest(input) {

    let height = 8848 - 5364;
    let index = 0;
    let command = input[index];
    let currentHeight = Number(input[index + 1]);
    let days = 1;
    let doneHeight = 0;

    while (command !== "END") {
        if (command === "Yes") {
            days++;
        }
        if (days > 5 || doneHeight >= height) {
            break;
        }
        doneHeight += currentHeight;
        index += 2;
        command = input[index];
        currentHeight = Number(input[index + 1]);
    }
    if (doneHeight >= height) {
        console.log(`Goal reached for ${days} days!`)
    } else if (doneHeight < height) {
        console.log(`Failed!`);
        console.log(`${5364 + doneHeight}`)
    }
}

everest(["Yes",
    "535",
    "Yes",
    "849",
    "Yes",
    "499",
    "Yes",
    "400",
    "Yes",
    "500"])