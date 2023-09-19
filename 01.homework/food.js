function food(input) {
    let dog = 2.50 * Number(input[0]);
    let cat = 4 * Number(input[1]);
    let sum = dog + cat;
    console.log(`${sum} lv.`);
}

food(["5", "4"])