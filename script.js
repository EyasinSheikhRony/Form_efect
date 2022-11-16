let signupText = document.getElementById("signupText");
let signupBtn = document.getElementById("signupBtn");
let signinBtn = document.getElementById("signinBtn");
let nameField = document.getElementById("nameField");

signinBtn.addEventListener("click", function () {
  nameField.style.maxHeight = "0";
  nameField.style.padding = "0";
  signupText.innerHTML = "Sing In";
  signupBtn.classList.add("disable");
  signinBtn.classList.remove("disable");
});

signupBtn.addEventListener("click", function () {
  nameField.style.maxHeight = "65px";
  nameField.style.padding = "5px";
  signupText.innerHTML = "Sing Up";
  signupBtn.classList.remove("disable");
  signinBtn.classList.add("disable");
});
