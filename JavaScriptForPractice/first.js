// console.log("Umesh Kumar");
// const profile= {
//     name: "Umesh kumar",
//     posts: 195,
//     followers:"569K",
// }
// console.log(typeof profile["followers"]);

// Logical operators

// let a = 10;
// let b = 20;

// let c = a<b;
// let d = a===10;
// console.log(c && d);

// if condition

// let color;
// let mode = "white";
// if(mode === "white"){
//     color="black";
// }
// else{
//     color="white";
// }
// console.log(color)

// Ternary operator

// let a = 10;
// let b = 20;

// let c = a<b ? console.log("a is less than b") : console.log("a is greater than b");
// let d = a<b ? "a is less than b" : "a is greater than b";
// console.log(d);

// check the number is multiple of 5 or not

// let a = prompt("Enter a number");

// if (a % 5 === 0) {
//     console.log("number is multiple of 5");
// }
// else {
//     console.log("number is not multiple of 5");
// }

// loops
// print table of 2
// for(let i=1; i<=10; i++){
//     console.log("2 * " +i+ " = " +2*i);
// }

// while loop
// let i=1;
// while(i<=10){
//     console.log("2 * " +i+ " = " +2*i);
//     i++;
// }

// do while loop
// let i=1;
// do{
//     console.log("2 * " +i+ " = " +2*i);
//     i++;
// }while(i<=10)

// for of loop ... it will return values of object or array
// let arr = [1,2,3,4,5];
// for(let i of arr){
//     console.log(i);
// }

// for in loop ... it will return keys of object or array
// let obj = {
//     name:"Umesh",
//     age:20
// }
// for(let i in obj){
//     console.log(i);
// }
// console.log(obj.age)

// print 1 to 100 even numbers
// for(let i = 0; i <= 100; i++){
//     if(i % 2 === 0){
//     console.log(i)}
// }

//guess the number
// let main_number = 8;
// let user_input = prompt("enter a number between 1-10");
// for(; user_input != main_number; ){
//     if(user_input < main_number){
//         user_input = prompt("enter higher number");
//     }
//     else{
//         user_input = prompt("enter lower number");
//     }
// }
// console.log("you guess right number ", main_number)

// string length and \n, \t
// let str = "umesh\tkumar"; // tab
// let str = "umesh\nkuamr";
// console.log(str)
// console.log(str.length)

// let str = "umesh kumar";
// let a =str.toUpperCase();
// console.log(a);
// console.log(str.toUpperCase());

// array slice and splice

// let arr = [1,2,3,4,5,6,7,8];
// console.log(arr.slice(2,5));  //"slice" it can't change the original array
// console.log(arr.splice(2,4,9,10)); //at the position 2 remove 4 elements and add 9 and 10 at that position and return the removed elements and if we want to add more , we can add more elements at that position
// "splice" it can change the original array
// console.log(arr);

// arr.push(9);
// [1,2,3,4,5,6,7,8].push(9);

// let functionName = () => {
//     console.log("this is a function");
// // block of code
// }

// This fucntion is return number of vowels and vowels
// function returnVowels(str){
//     // let vowels = ["a","e","i","o","u"];
//     let counts=0;
//     for(let con of str){
//         if(con == 'a' || con == 'e' || con == 'i' || con == 'o' || con == 'u'){
//             console.log(con);
//             counts++;
//         }
//     }
//     console.log(counts);
// }

// forEach loop in array
// arr = ["Delhi", "Mumbai", "Chennai", "Kolkata"];
// arr.forEach((val, idx, arr) => {
//     console.log(val.toUpperCase(), idx, arr);
// })
// Higher order function definition : it can take function as an argument or return function as an output or both

// find square of number from a array
// arr = [1, 2, 3, 4, 5];
// arr.forEach((val) => {
//     console.log(val ** 2);
// })

// reduce function
// arr = [1, 2, 3, 4, 5];
// let answer = arr.reduce((result, val) => {
//   return result + val;
// });
// console.log(answer);


// find maximum number from an array
// arr = [1, 2, 3, 4, 5, 5, 1, 2];
// let answer = arr.reduce((result, val) => {
//   return result > val ? result : val;
// });
// console.log(answer);

