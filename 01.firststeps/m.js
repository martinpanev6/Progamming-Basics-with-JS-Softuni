function id(input){
    let firstName = input[0];
    let secondName = input[1];
    let age = Number(input[2]);
    let town = input[3];
    console.log(`You are ${firstName} ${secondName}, a ${age}-years old person from ${town}.`)

}
id(["Silvana", "Ivanova", "16", "Yambol"])