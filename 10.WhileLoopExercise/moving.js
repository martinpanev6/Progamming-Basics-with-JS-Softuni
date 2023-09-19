function moving(input) {

    let width = Number(input[0]);
    let length = Number(input[1]);
    let height = Number(input[2]);
    let spase = width * length * height;
    let box = 1;
    let boxCount = 0;
    let index = 3;
    let command = input[index];

    while (command !== "Done"){
        let currentBoxCount = Number(command);
        boxCount += currentBoxCount;

        if(boxCount > spase){
            console.log(`No more free space! You need ${boxCount - spase} Cubic meters more.`);
            break;
        }
        index++; 
        command = input[index];
    }
    if(command === "Done" && boxCount <= spase){
        console.log(`${spase - boxCount} Cubic meters left.`)
    }
}

moving(["10", 
"1",
"2",
"4", 
"6",
"Done"]);