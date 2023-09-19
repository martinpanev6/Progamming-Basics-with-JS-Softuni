function tank(input) {
let length = Number(input[0]);
let wide = Number(input[1]);
let height = Number(input[2]);
let percentage = Number(input[3]);

let v = length * wide * height;
let vLitres = 0.001 * v;
let fullSpace = 0.01 * percentage;
let neededLitres = vLitres * (1 - fullSpace);

console.log(neededLitres);
}

tank(["85", "75", "47", "17"]);