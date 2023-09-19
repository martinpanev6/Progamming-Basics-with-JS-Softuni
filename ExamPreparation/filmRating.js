function filmRating(input) {

    let movieCount = Number(input[0]);
    let max = Number.MIN_SAFE_INTEGER;
    let min = Number.MAX_SAFE_INTEGER;
    let minMovie = "";
    let maxMovie = "";
    let avgRating = 0;
    let totalMovieRating = 0;

    for (let i = 1; i < movieCount * 2 + 1; i += 2) {
        let movieName = input[i];
        let movieRating = Number(input[i + 1]);
        if (movieRating > max) {
            max = movieRating;
            maxMovie = movieName;
        }

        if (movieRating < min) {
            min = movieRating;
            minMovie = movieName;
        }

        totalMovieRating += movieRating;
    }

    avgRating = totalMovieRating / movieCount;
    console.log(`${maxMovie} is with highest rating: ${max.toFixed(1)}`);
    console.log(`${minMovie} is with lowest rating: ${min.toFixed(1)}`);
    console.log(`Average rating: ${avgRating.toFixed(1)}`);
}

filmRating(["5",
"A Star is Born",
"7.8",
"Creed 2",
"7.3",
"Mary Poppins",
"7.2",
"Vice",
"7.2",
"Captain Marvel",
"7.1"])