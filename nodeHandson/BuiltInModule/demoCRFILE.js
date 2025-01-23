const fs= require('fs');

const fileName='home.txt'
const fileContent= `
    Hrishikesh Mahure
    FDP
    Edunet
`
// dreate a file
fs.writeFile(fileName, fileContent, (error)=>{
        if(error){
            console.log(error);
        }
        else{
            console.log('file created');
        }
})