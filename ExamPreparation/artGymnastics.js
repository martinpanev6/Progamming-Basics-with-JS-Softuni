function artGymnastics(input) {

    let country = input[0];
    let thing = input[1];
    let hardness = 0;
    let experience = 0;

    if (country === "Russia") {

        if (thing === "ribbon") {
            hardness = 9.100;
            experience = 9.400;
        } else if (thing === "hoop") {
            hardness = 9.300;
            experience = 9.800;
        } else if (thing === "rope") {
            hardness = 9.600;
            experience = 9.000;
        }
    } else if (country === "Bulgaria") {

        if (thing === "ribbon") {
            hardness = 9.600;
            experience = 9.400;
        } else if (thing === "hoop") {
            hardness = 9.550;
            experience = 9.750;
        } else if (thing === "rope") {
            hardness = 9.500;
            experience = 9.400;
        }
    } else if (country === "Italy") {

        if (thing === "ribbon") {
            hardness = 9.200;
            experience = 9.500;
        } else if (thing === "hoop") {
            hardness = 9.450;
            experience = 9.350;
        } else if (thing === "rope") {
            hardness = 9.700;
            experience = 9.150;
        }
    }

    let finalGrade = (hardness + experience).toFixed(3);
    let pers = ((20 - finalGrade) / 20) * 100

    console.log(`The team of ${country} get ${finalGrade} on ${thing}.`);
    console.log(`${pers.toFixed(2)}%`)

}

artGymnastics(["Russia", "rope"])