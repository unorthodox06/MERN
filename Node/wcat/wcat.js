    // 1 -> node wcat.js filepath => displays the contents of a file in terminal

    const fs = require("fs");
    let inputArr = process.argv.slice(2);   // it display in array
    // console.log(input);

    let filesArr = [];
    let optionsArr = [];
    // placed files path in filesArr
    for(let i=0; i<inputArr.length; i++){
        let firstChar = inputArr[i].charAt(0);
        // console.log(firstChar);
        if(firstChar == '-'){
            optionsArr.push(inputArr[i]);
        }else{
             filesArr.push(inputArr[i]);
        }
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
        content += filesContent+"\r\n";

    }

    console.log(content);

    let contentArr = content.split("\r\n");
    console.table(contentArr);

    // check -s is present
    let isPresent = optionsArr.includes("-s");
    if(isPresent){
        for(let i = 1; i < contentArr.length; i++){
            if(contentArr[i] == "" && contentArr[i-1] == ""){
                contentArr[i] = null;
            }
            else if(contentArr[i] == "" && contentArr[i-1] == null){
                contentArr[i] == null;
            }
        }
        console.table(contentArr);
        // let tempArr = [];
        // // push everything in tempArr except null
        // for(let i = 0; i < contentArr.length; i++){
        // if(contentArr[i] != null){
        // tempArr.push()
    }

        

