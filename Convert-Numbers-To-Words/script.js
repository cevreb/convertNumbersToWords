function numberToWords(number) {
  const units = [
    "",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];
  const teens = [
    "ten",
    "eleven",
    "twelve",
    "thirteen",
    "fourteen",
    "fifteen",
    "sixteen",
    "seventeen",
    "eighteen",
    "nineteen",
  ];
  const tens = [
    "",
    "ten",
    "twenty",
    "thirty",
    "forty",
    "fifty",
    "sixty",
    "seventy",
    "eighty",
    "ninety",
  ];

  if (number === 0) return "zero";

  let words = "";

  if (number >= 1000000) {
    words += numberToWords(Math.floor(number / 1000000)) + " million ";
    number %= 1000000;
  }

  if (number >= 1000) {
    words += numberToWords(Math.floor(number / 1000)) + " thousand ";
    number %= 1000;
  }

  if (number >= 100) {
    words += units[Math.floor(number / 100)] + " hundred ";
    number %= 100;
  }

  if (number >= 20) {
    words += tens[Math.floor(number / 10)];
    number %= 10;
    if (number > 0) words += "-";
  } else if (number >= 10) {
    words += teens[number - 10];
    number = 0;
  }

  words += units[number];

  return words.trim();
}

const container = document.createElement("div");
container.id = "numberWordsContainer";

let resultString = "";
for (let i = 1; i <= 1000000; i++) {
  const wordForm = numberToWords(i);
  resultString += wordForm + ", ";
}

container.innerHTML = resultString.slice(0, -2);

document.body.appendChild(container);

function refreshPage() {
  location.reload(true);
}

function convertAndDisplay() {
  container.innerHTML = "";

  const userInput = document.getElementById("numberField").value;
  const userInputNumber = parseInt(userInput, 10);

  if (
    isNaN(userInputNumber) ||
    userInputNumber < 1 ||
    userInputNumber > 1000000
  ) {
    alert("Please enter a valid number between 1 and 1,000,000.");
    return;
  }

  const wordForm = numberToWords(userInputNumber);
  const userResultContainer = document.createElement("div");
  userResultContainer.innerHTML = `Your number as a word is ${wordForm}`;

  container.appendChild(userResultContainer);
}
