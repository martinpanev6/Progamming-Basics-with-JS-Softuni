function cinemaProfit(input) {

    let movieName = input[0];
    let daysCount = Number(input[1]);
    let ticketsCount = Number(input[2]);
    let TicketsPrice = Number(input[3]);
    let cinemaPer = Number(input[4]);
    let daysProfit = ticketsCount * TicketsPrice;
    let totalProfit = daysCount * daysProfit;
    let perForCinema = (cinemaPer / 100) * totalProfit;
    let finalToatal = totalProfit - perForCinema;
    console.log(`The profit from the movie ${movieName} is ${finalToatal.toFixed(2)} lv.`)
}

cinemaProfit(["Python Basics",
    40,
    34785,
    10.45,
    14])