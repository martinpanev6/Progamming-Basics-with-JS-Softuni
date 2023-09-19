function trekkingMania(input) {
    
    let groupsCount = Number(input[0]);

    let climbingMusala = 0;
    let climbingMonblan = 0;
    let climbingKilimandjaro = 0;
    let climbingK2 = 0;
    let climbingEverest = 0;

    for (index = 1; index < input.length; index++) {

        let currentGroupCount = Number(input[index]);

        if (currentGroupCount <= 5) {
            climbingMusala += currentGroupCount;
        } else if (currentGroupCount <= 12) {
            climbingMonblan += currentGroupCount;
        } else if (currentGroupCount <= 25) {
            climbingKilimandjaro += currentGroupCount;
        } else if (currentGroupCount <= 40) {
            climbingK2 += currentGroupCount;
        } else if (currentGroupCount > 40) {
            climbingEverest += currentGroupCount;
        }
    }

    let totalPeople = climbingMusala + climbingMonblan + climbingKilimandjaro + climbingK2 + climbingEverest;
    
    console.log(`${(climbingMusala / totalPeople * 100).toFixed(2)}%`);
    console.log(`${(climbingMonblan / totalPeople * 100).toFixed(2)}%`);
    console.log(`${(climbingKilimandjaro / totalPeople * 100).toFixed(2)}%`);
    console.log(`${(climbingK2 / totalPeople * 100).toFixed(2)}%`);
    console.log(`${(climbingEverest / totalPeople * 100).toFixed(2)}%`);
}

trekkingMania(["5","25","41","31","250","6"]);