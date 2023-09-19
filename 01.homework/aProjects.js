function aProjects(input) {
    let name = input[0];
    let count = Number(input[1]);
    let hours = count * 3;
    console.log(`The architect ${name} will need ${hours} hours to complete ${count} project/s.`)
}

aProjects(["Martin", "4"])