function animals(input) {
let an = input[0];

switch(an){
    case "dog":
        console.log("mammal")
        break;
    case "crocodile":
    case "tortoise":
    case "snake":
        console.log("reptile")
        break;
    default:
        console.log("unknown")
}
}

animals(["snak"]);