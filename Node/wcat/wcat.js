// 1 -> node wcat.js filepath => displays the contents of a file in terminal

const fs = require("fs");
let inputArr = process.argv.slice(2);   // it display in array
// console.log(input);

let filesArr = [];

// placed files path in filesArr
for(let i=0; i<inputArr.length; i++){
    filesArr.push(inputArr[i]);
}

// console.log("files to be read are " + filesArr);


// check if all the files are present

for(let i = 0; i < filesArr.length; i++){
         let doesExist = fs.existsSync(filesArr[i]);
         if(!doesExist){
             console.log("files does not exist ");
            //  return;            
         }
}

// content read and appending starts

let content = "";
for (let i = 0; i < filesArr.length; i++){
    let filesContent = fs.readFileSync(filesArr[i]);
    content += filesContent+"\n";

}

console.log(content);