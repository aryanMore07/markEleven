const dateOfBirth = document.querySelector("#date-of-birth");
const luckyNumber = document.querySelector("#lucky-number");
const checkNumberBtn = document.querySelector("#check-number");
const outputBox = document.querySelector("#output-box");
function compareValues(sum, luckyNumber) {
  if (sum % luckyNumber === 0) {
    outputBox.value = "Your Birthday is Lucky 🎉";
  } else {
    outputBox.value = "Your Birthday is not lucky 😥";
  }
}

function checkBirthDateIsLucky() {
  const dob = dateOfBirth.value;
  const sum = calculateSum(dob);
  if (sum && dob) {
    compareValues(sum, luckyNumber.value);
  } else {
    outputBox.value = "Enter Both The Fields";
  }
}

function calculateSum(dob) {
  dob = dob.replaceAll("-", "");
  let sum = 0;
  for (i = 0; i < dob.length; i++) {
    sum = sum + Number(dob.charAt(i));
  }
  return sum;
}

checkNumberBtn.addEventListener("click", checkBirthDateIsLucky);
