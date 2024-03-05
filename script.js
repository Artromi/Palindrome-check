"use strict";
const textInput = document.getElementById("text-input");
const checkForm = document.getElementById("check-form");
const resultBox = document.getElementById("result");
// Event Listener
// checkForm.addEventListener("submit", check()); => funktioniert nicht ?
const btnCheck = document.getElementById("check-btn");
checkForm.addEventListener("submit", check);
//
function check(e) {
  e.preventDefault();
  const textValue = textInput.value.replace(/[^a-z0-9]/gi, "").toLowerCase();
  const reversedText = textValue
    .split("")
    .reverse()
    .join("")
    .replace(/[^a-z0-9]/gi, "")
    .toLowerCase();
  const checkResult = document.createElement("p");

  if (textValue.trim() === "") {
    window - alert("Please input a value");
    return;
  }

  if (reversedText === textValue) {
    resultBox.innerHTML = "";
    checkResult.textContent = `${textInput.value} is a Palindrome`;
    resultBox.append(checkResult);
  } else {
    resultBox.innerHTML = "";
    checkResult.textContent = `${textInput.value} is not a Palindrome`;
    resultBox.append(checkResult);
  }
}
