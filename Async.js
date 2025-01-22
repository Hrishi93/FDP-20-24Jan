/*console.log('Hello 1');
console.log('Hello 2');
setTimeout(()=>{console.log('Hello 2.5')}, 2000);
console.log('Hello 3');
console.log('Hello 4')*/


function show(){
    console.log("Hello Hrishikesh");
    setTimeout( ()=>{
        console.log(college())
    },2000)
}

function college(){
    return "at PAlloti"
}

show()
