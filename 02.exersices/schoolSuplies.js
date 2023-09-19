function schoolSuplies(input) {
    let pens = Number(input[0]);
    let markers = Number(input[1]);
    let litres = Number(input[2]);
    let discount = Number(input[3]);
    let pensPrice = pens * 5.80;
    let markersPrice = markers * 7.20;
    let litresPrice = litres * 1.20;
    let finalPrice = pensPrice + markersPrice + litresPrice;
    let priceWithDiscount = finalPrice - (finalPrice * discount / 100);
    console.log(priceWithDiscount);
}

schoolSuplies(["2 ", "3 ", "4 ", "25 "])