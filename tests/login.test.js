const fetch = require("node-fetch");

it("Should get a login token",async ()=>{

    let token = "";//This is an empty string
    const options = {
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({
            "userName":"getalife@gmail.com",
            "password":"p@ssW0rd"
        })
    }

    const response = await fetch('https://dev.stedi.me/login',options);

    token = await response.text();
    console.log("token "+token);
    const status = response.status;

    expect(status).toBe(200);
    expect(token.length).toBe(36);

})