function password(input){

    let username = input[0];
    let pasword = input[1];
    let data = input[2];
    let index = 3;

    while(data !== pasword){
        data = input[index];
        index++;
    }
    console.log(`Welcome ${username}!`)
}

password(["Nakov","1234","Pass","1324","1234"]);