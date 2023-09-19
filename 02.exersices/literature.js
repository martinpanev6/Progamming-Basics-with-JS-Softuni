function literature(input) {
    let bookPages = Number(input[0]);
    let pagesPerHour = Number(input[1]);
    let days = Number(input[2]);
    let totalTime = bookPages / pagesPerHour;
    let hoursperDay = totalTime / days;
    console.log(hoursperDay);
}

literature(["212 ", "20 ", "2 "])