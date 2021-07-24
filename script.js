"use strict";

// console.log(document.querySelector(".total-tip").textContent);

// document.querySelector(".total-tip").textContent = "$69.99";

// document.querySelector(".total-total").textContent = "$0.50";

// document.querySelector(".custom-tip").value = 23;
let totalBill;
let totalTip;
let totalTotal;
let numberPeople;

let customTip;

const tipCalculator = function (tip) {
  totalBill = document.querySelector(".total-bill").value;
  numberPeople = document.querySelector(".people").value;
  if (!numberPeople) {
    numberPeople = 1;
  }

  totalTip = (totalBill * tip) / 100 / Number(numberPeople);
  document.querySelector(".total-tip").textContent = `$${totalTip.toFixed(2)}`;

  totalTotal = (Number(totalBill) + Number(totalTip)) / Number(numberPeople);

  console.log(numberPeople);

  document.querySelector(".total-total").textContent = `$${totalTotal.toFixed(
    2
  )}`;
};

//%5 Tip
document.querySelector(".five-percent").addEventListener("click", function () {
  tipCalculator(5);
});

//%10 Tip
document.querySelector("#ten-percent").addEventListener("click", function () {
  tipCalculator(10);
});

//%15 Tip
document
  .querySelector("#fifteen-percent")
  .addEventListener("click", function () {
    tipCalculator(15);
  });

//%25 Tip
document
  .querySelector("#twentyfive-percent")
  .addEventListener("click", function () {
    tipCalculator(25);
  });

//%50 Tip
document.querySelector("#fifty-percent").addEventListener("click", function () {
  tipCalculator(50);
});

//Custom Tip
document
  .querySelector(".custom-tip")
  .addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      customTip = document.querySelector(".custom-tip").value;
      tipCalculator(customTip);
    }
  });

//Reset

document.querySelector(".reset").addEventListener("click", function () {
  console.log("you clicked reset");
  location.reload();
});
