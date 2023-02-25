// function outer(){
//     var a = 7;
//     function inner(){
//         console.log(a);
//     }
//     var a = 10;
//     return inner;
// }

// var b = outer();
// console.log(b);
// b();

let count = 0;
    const nums = [10, 11, 12, 13]; 
    for(var i in nums){
        if (i) count += 1;
    }

    console.log(count)