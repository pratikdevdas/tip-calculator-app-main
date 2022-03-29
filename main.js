// declaration
let billInput = document.querySelector(".billInput");
const personInput = document.querySelector(".peopleInput");
const result = document.querySelector("#value1");
const result2 = document.querySelector("#value2");
const reset = document.querySelector(".reset");
const custom = document.querySelector(".custom");
const leftbtn = document.querySelector('.left--box__second')

let billAmount,
  btnPercentage = 0,
  persons,
  percentageValue;

// event handler functions
const billValue = (e) => {
  billAmount = Number(e.target.value);
  calculate();
  return billAmount;
};

const buttonValue = (e) => {
  btnPercentage = Number(e.target.value);
  calculate();
  return btnPercentage;
};

const personValue = (e) => {
  persons = Number(e.target.value);
  calculate();
  return persons;
};

const resetter = () => {
  billAmount = 0;
  btnPercentage = 0;
  persons = 0;
  calculate();
  return;
};


// event handlers

leftbtn.addEventListener('click', buttonValue)
custom.addEventListener("input", buttonValue);

billInput.addEventListener("input", billValue);
personInput.addEventListener("input", personValue);

reset.addEventListener("click", resetter);

// core calculation
function calculate() {
  percentageValue = (billAmount * btnPercentage) / 100;
  console.log(billAmount, btnPercentage, persons);
  let tipAmount = percentageValue / persons;
  let perPerson = (percentageValue + billAmount) / persons;
  if (isNaN(tipAmount) || tipAmount === Infinity) {
    result.textContent = "$0.00";
    result2.textContent = "$0.00";
    return;
  } else {
    result.textContent = `$${Math.round(tipAmount * 100) / 100}`;
    result2.textContent = `$${Math.round(perPerson * 100) / 100}`;
    return;
  }
}
