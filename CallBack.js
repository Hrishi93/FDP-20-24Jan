function sayHello(fname , lname){
    console.log(`Hello ${fname} ${lname}`)
}

/*function msg(name , callback){
    console.log("msg is loading");
    callback(name);
}*/


function msg(fname, lname, callback){
    console.log("msg is loading");

    setTimeout( () =>{
        callback(fname , lname);
    }, 3000)
}

msg("Hrishikesh", "Mahure", sayHello)