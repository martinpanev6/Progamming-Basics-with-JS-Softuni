function salary(input) {
    let tabs = Number(input[0]);
    let salar = Number(input[1]);

    for(let index = 2; index <= input.length; index++) {
       let currentTab = input[index];

       switch(currentTab){
        case "Facebook": salar -= 150; break;
        case "Instagram": salar -= 100; break;
        case "Reddit": salar -= 50; break;
       }

    if(salar <= 0){ 
    console.log(`You have lost your salary.`)
    break;
    }
    }

    if(salar > 0){
        console.log(Math.floor(salar));
    }
    
}

salary(["10","750","Facebook","Dev.bg","Instagram","Facebook","Reddit","Facebook","Facebook"]);