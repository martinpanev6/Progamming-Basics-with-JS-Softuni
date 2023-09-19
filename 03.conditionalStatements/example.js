function shapes(input){
    
    let typeShape = input[0];
    let a =Number(input[1]);
    let b = Number(input[2]);
    let c = Number(input[3]);
    let area = 0;

    if(typeShape === "square"){
        area = a * a;
        console.log(area);
    }else if(typeShape === "recctangle"){
        area = a * b;
        console.log(area);
    }else if(typeShape === "circle"){
        area = Math.PI * a * a;
        console.log(area);
    }else if(typeShape === "triangle"){
        let s = (a + b +c) / 2;
        area = Math.SQRT2(s * ((s - a) * (s - b) * (s - c)));
        console.log(area);
    }
}

shapes(["square", "5"])