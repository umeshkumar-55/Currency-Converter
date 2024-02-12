// chain of promise

// function f1(){
//     return new Promise((resolve, reject)=>{
//         setTimeout(() =>{
//             console.log("data fetched from f1");
//             resolve("success1")
//         }), 4000;
//     });
// };
// function f2(){
//     return new Promise((resolve, reject)=>{
//         setTimeout(() =>{
//             console.log("data fetched from f2");
//             resolve("success2");
//         }), 4000;
//     });
// };

// console.log("fetching data1 .....");
// f1().then(() => {
//     console.log("fetching data2 .....");
//     f2().then(() => {
//     });
// })

// async await syntax
// function f1() {
//   console.log("function f1 executed successfully");
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("f1");
//       resolve("success");
//     }, 3000);
//   })
// }

// function f2() {
//   console.log("function f2 executed successfully");
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("f2");
//       resolve("success");
//     }, 3000);
//   })
// }

// async function main() {
//   await f2(); // async await syntax
//   await f1(); //It first executes f2 and then f1
// }
// main();

// Callback hell Syntax
// getData(1, () => {
//     console.log("getting data from 1");
//     getData(2, () => {
//         console.log("getting data from 2");
//         getData(3, () => {
//             console.log("getting data from 3");
//             getData(4, () => {
//                 console.log("getting data from 4");
//             })
//         })
//     })
// })

//IIFE : Immediately Invoked Function Expression
//(function(){})()     ---> Syntax 1
//(() => {})()          ---> Syntax 2
//(async () => {})()     ---> Syntax 3


// API call 

// const URL = "https://cat-fact.herokuapp.com/facts";
// const getFacts = async () => {
//     console.log("fetching data");
//     let promise = fetch(URL);
//     console.log(promise);
// }
