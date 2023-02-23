// console.log(a);
// var a = 10;
// // console.log(b);
// let b = 100;
// console.log(b);

var a = 100;

{
    var a = 10;
    let b = 20;
    const c = 30;

    console.log(a);
    console.log(b);
    console.log(c);
}

console.log(a);
console.log(b);

// block scope -> variables declared in a block are accesible inside that block  , those variables are known to be block scoped 
//varibales declared using let and const are block scoped 
//var is function scoped , it is not block scoped
