// Dates

let myDate = new Date()
console.log(myDate.toString())
console.log(myDate.toDateString())
console.log(myDate.toLocaleString())
console.log(typeof myDate);

// let myCreatedDate = new Date(2024,0, 07 )
let myCreatedDate = new Date("1-23-2024" )
console.log(myCreatedDate.toLocaleString());

let newDate = new Date()
console.log(newDate);
console.log(newDate.getDate());
console.log(newDate.getFullYear());

newDate.toLocaleString('default',{
    weekday:"long",
})