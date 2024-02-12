let Base_URL =
  "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies";

let dropdowns = document.querySelectorAll(".dropdown select");
let img = document.querySelectorAll("img src");
let from1 = document.querySelector("#from1");
let to1 = document.querySelector("#to1");
let btn = document.querySelector("form button");
let fromCurrency = document.querySelector("#from1");
let toCurrency = document.querySelector("#to1");
let msg = document.querySelector(".msg");

window.addEventListener("load", () => {
  updateExchangeRate();
});

for (let select of dropdowns) {
  for (let currCode in new_countryList) {
    // console.log(new_countryList[currCode], currCode);
    let newOption = document.createElement("option");
    newOption.innerText = currCode;
    newOption.value = currCode;
    select.append(newOption);

    if (select.id === "from1" && currCode === "USD") {
      newOption.selected = "selected";
    } else if (select.id === "to1" && currCode === "INR") {
      newOption.selected = "selected";
    }
    select.addEventListener("change", (evt) => {
      updateFlag(evt.target);
    });
  }
}

let updateFlag = (element) => {
  // console.log(element);
  let currCode = element.value;
  // console.log(currCode);
  let countryCode = currCode;
  let newSrc = `https://flagsapi.com/${new_countryList[countryCode]}/flat/64.png`;
  let img = element.parentElement.querySelector("img");
  img.src = newSrc;
};

btn.addEventListener("click", (evt) => {
  evt.preventDefault(); //yeh automatically hone wale work ko cancel krta hai like page refresh, etc etc
  updateExchangeRate();
});

let updateExchangeRate = async () => {
  let amount = document.querySelector(".amount input");
  let amountValue = amount.value;
  // console.log(amountValue);
  // console.log(fromCurrency.value, toCurrency.value);
  if (amountValue == "" || amountValue < 1) {
    amount.value = "1";
    amountValue = 1;
  }

  let URL = `${Base_URL}/${fromCurrency.value.toLowerCase()}/${toCurrency.value.toLowerCase()}.json`;
  let response = await fetch(URL);
  let data = await response.json();
  let rate = data[toCurrency.value.toLowerCase()];
  // console.log(rate);
  // console.log(response);

  let finalAmount = rate * amountValue;
  // console.log(finalAmount);

  msg.innerText = `${amountValue} ${fromCurrency.value} = ${finalAmount} ${toCurrency.value}`;
};
