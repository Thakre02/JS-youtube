// Primitive (call by value)

// 7 types: String ,Number, Boolean, null, undefined, Symbol, BigInt

//
const score = 100
const scoreValue = 100.1

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol("123")
const anotherId = Symbol('123')

console.log(id === anotherId);
const bigNumber = 3456478945448431512154844n

// Rference (Non primitive)

// Array, Objects,Functions

const heros = ["shaktiman", "naagraj", "doga"]
let myObj = {
    name: "krk",
    age: 43

}

const myFunction = function (){
    console.log("namaste duniya")

}

console.log(typeof bigNumber);


