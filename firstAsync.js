function hello(){
    let n;
    for(n=1;n<5;n++){
        console.log(`Hello ${n}`);
        if(n==3){
            setTimeout(() => {
                console.log("Time out for 3 sec")
            }, 3000);
        }
    }
}

hello();