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


// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack (Primitive - copy), Heap (NON PRIMITIVE- rference) 

let myName = " Namaste Duniya"
let anotherName = myName

anotherName = "chaiaurcode"

console.log(anotherName);
console.log(myName);


let userOne = {
    email: "user@google.com",
    upiid: "user@ybl"
}

console.log(userOne);

 let  userTwo = userOne

userTwo.email="xys@yaya.com"

console.log(userOne);
console.log(userTwo);
