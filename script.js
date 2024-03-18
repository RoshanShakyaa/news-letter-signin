const container1 = document.querySelector(".container");
const container2 = document.querySelector(".container2");
const form = document.querySelector("form");
const submitBtn = document.querySelector(".submit-btn");
const dismissBtn = document.querySelector(".dismiss-btn");
const invalidMsg = document.querySelector(".invalid-msg");
const emailInput = document.querySelector(".email-input");

const userEmail = document.querySelector(".user-email");

function formSuccess() {
  container1.classList.add("hide");
  container2.classList.add("active");
}

function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const email = emailInput.ariaValueMax.trim();

  if (validateEmail(email)) {
    formSuccess();
    userEmail.innerText = email;
    emailInput.value = "";

    invalidMsg.classList.remove("active");
    emailInput.classList.remove("active");
  } else {
    invalidMsg.classList.add("active");
    emailInput.classList.add("active");
  }
});

dismissBtn.addEventListener("click", () => {
  container2.classList.add("hide");
  container1.classList.add("active");
});
