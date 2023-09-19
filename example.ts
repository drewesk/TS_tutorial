// Type Annotations

//let myName: string  = "Andrew";
//let isCool: boolean = true;
//let favNum: number = 333;
//
//function add(a: number, b: number) {
//    return a + b;
//}
//
//console.log(add(5,5));

// Inferred Types

let myName: string  = "Andrew";
let isCool: boolean = true;
let favNum: number = 333;

//myName = 300; // testing the noEmitOnError option
//myName = 42; with a curly { brace error too

function add(a: number, b: number) {
    return a + b;
}

let result = add(5,5);

console.log(result);

// Union Types


const numbersAndStrings: (string | number) = ["jay", 0, "Andrew", 42];

console.log(numbersAndStrings);


// Objects and Interfaces

// Optional Properties

// Classes

// Generics

// any, unknown, never

// Type Assertions

// @ts-ignore / @ts-nocheck
