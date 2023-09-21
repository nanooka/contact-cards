const registration = document.getElementById("registration-form");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirm-password");

function validation() {
  if (password.value.length < 6 || !/\d/.test(password.value)) {
    document.getElementById("password-error").textContent =
      "must contain at least 6 characters include a number";
    return false;
  } else {
    document.getElementById("password-error").textContent = "";
  }
  if (password.value !== confirmPassword.value) {
    document.getElementById("confirm-password-error").textContent =
      "Passwords don't match";
    return false;
  } else {
    document.getElementById("confirm-password-error").textContent = "";
  }
}
