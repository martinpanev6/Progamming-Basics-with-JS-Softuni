function greening(input) {
    let m = 7.61;
    let sum = m * Number(input[0]);
    let discount = 0.18 * sum;
    let price = sum - discount;
    console.log(`The final price is: ${price} lv.`)
    console.log(`The discount is: ${discount} lv.`)
}

greening(["550"])