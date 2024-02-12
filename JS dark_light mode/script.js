// let div = document.querySelector("div");
// console.log(div);

// let other1 = div.getAttribute("id");                // get attribute
// co nsole.log(other1);

// first_div.setAttribute("first_div", "second_div");

let modebtn = document.querySelector("#btn1");
let currentMode = "light";
let for_body = document.querySelector("body");
modebtn.addEventListener("click", () => {
  if (currentMode == "light") {
    currentMode = "dark";
    for_body.classList.add("dark");
    for_body.classList.remove("light");
  } else {
    currentMode = "light";
    for_body.classList.add("light");
    for_body.classList.remove("dark");
  }
});
