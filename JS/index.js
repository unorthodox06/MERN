    let a ;
    a = 10;

    console.log(a);

    var num = 200;
    console.log(`the half of ${num} is ${num/2}`);

    let l = 10;
    console.log(l);

    l = 19;
    console.log(l);

    //String

    //1. extraction method

     //slice method

    let str = "hello aniket";

    console.log(str);
    console.log(str.length);


    var slicestr = str.slice(2,5);
    console.log(slicestr);

   var slicestr = str.slice(-12,-2);
   console.log("negative:- " +slicestr);
   
  var substring = str.substr(2,9);
  console.log("this is a substring:- "+substring);


  let firstStr = "Believe ";
  let secondStr = "in yourself ";

  console.log(firstStr + secondStr);

  let concatStr = firstStr.concat(secondStr,"and me");
  console.log(concatStr);

  let trimStr = "                                     Hello       how are you                 ";
console.log(trimStr);
console.log(trimStr.length);

console.log(trimStr.trim());
console.log(trimStr.trim().length);