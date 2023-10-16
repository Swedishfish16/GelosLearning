"use strict";

console.log("Hello World");

const isValidEmail = (email) => {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

// selecting form and submitted message
const form = document.querySelector("form");
const thankyou = document.querySelector(".thank-you");

// form inputs
const nameInput = document.querySelector('input[name="fname"]');
const emailInput = document.querySelector('input[name="email"]');
const subjectInput = document.querySelector('input[name="subject"]');
const messageInput = document.querySelector('textarea[name="message"]');

const inputs = [nameInput, emailInput, subjectInput, messageInput];

// selecting error message divs
const nameError = document.getElementById("name-error");
const emailError = document.getElementById("email-error");
const subjectError = document.getElementById("subject-error");
const messageError = document.getElementById("message-error");

let isFormValid = false;
let isValidationOn = false;

// removes error messages if the form is valid
const resetElm = (elm, error) => {
  elm.classList.remove("invalid");
  error.classList.add("hidden");
};

// this function displays the error message on the invalid input
const invalidateElm = (elm, error) => {
  elm.classList.add("invalid");
  error.classList.remove("hidden");
};

// this function validates inputs to make sure that are valid, if ther aren't then
//the error message will be shown, and the form will not be submitable until proper
//criteria is met
const validateInputs = () => {
  if (!isValidationOn) return;

  isFormValid = true;
  resetElm(nameInput, nameError);
  resetElm(emailInput, emailError);
  resetElm(subjectInput, subjectError);
  resetElm(messageInput, messageError);

  if (!nameInput.value) {
    isFormValid = false;
    invalidateElm(nameInput, nameError);
  }

  if (!isValidEmail(emailInput.value)) {
    isFormValid = false;
    invalidateElm(emailInput, emailError);
  }

  if (!subjectInput.value) {
    isFormValid = false;
    invalidateElm(subjectInput, subjectError);
  }

  if (!messageInput.value) {
    isFormValid = false;
    invalidateElm(messageInput, messageError);
  }
};

// If all proper criteria is met, the form is removed and a thankyou message is
//displayed
form.addEventListener("submit", (e) => {
  e.preventDefault();
  isValidationOn = true;
  validateInputs();
  if (isFormValid) {
    form.remove();
    thankyou.classList.remove("hidden");
  }
  console.log("working");
});

// adds event listener to each input so that the error message will be displayed
//on each input
inputs.forEach((input) => {
  input.addEventListener("input", () => {
    validateInputs();
  });
});
