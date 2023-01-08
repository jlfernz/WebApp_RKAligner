function setFormMessage(formElement, type, message) {
  const messageElement = formElement.querySelector(".form__message");

  messageElement.textContent = message;
  messageElement.classList.remove("form__message--success", "form__message--error");
  messageElement.classList.add(`form__message--${type}`);
}

function handleClickRegisterLink(event) {
  const loginForm = document.querySelector("#login");
  const createAccountForm = document.querySelector("#createAccount");
}

function handleSubmitRegistration(){
  const username = document.getElementById("username").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const confirmpass = document.getElementById("confirmpass").value;

  let submitOK = "true";
  
  if (password != confirmpass) {
    return alert("Password did not match");
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.querySelector("#login");
  const createAccountForm = document.querySelector("#createAccount");
  console.log("test")

  document.querySelector("#linkCreateAccount").addEventListener("click", e => {
      e.preventDefault();
      loginForm.classList.add("form--hidden");
      createAccountForm.classList.remove("form--hidden");
  });

  document.querySelector("#linkLogin").addEventListener("click", e => {
      e.preventDefault();
      loginForm.classList.remove("form--hidden");
      createAccountForm.classList.add("form--hidden");
  });


  loginForm.addEventListener("submit", e => {
      e.preventDefault();
      window.location.assign('files.html');
      // Perform your AJAX/Fetch login

      // setFormMessage(loginForm, "error", "Invalid username/password combination");
  });
  document.querySelectorAll(".form__input").forEach(inputElement => {

      inputElement.addEventListener("blur", e => {
          if (e.target.id === "signupUsername" && e.target.value.length > 0 && e.target.value.length < 10) {
              setInputError(inputElement, "Username must be at least 10 characters in length");
          }
      });

      inputElement.addEventListener("input", e => {
          clearInputError(inputElement);
      });
  });
});