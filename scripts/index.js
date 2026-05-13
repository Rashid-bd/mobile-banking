// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ~~~~~~~~~~~~~~~~~~~~~~ Login Button Function ~~~~~~~~~~~~~~~~~~~~~~~~

document.getElementById("login-btn").addEventListener("click", function (event) {
  event.preventDefault();
  const validNumber = "12345678910";
  const validPin = "1234";

  const loginNumber = document.getElementById("login-number").value.trim();
  const loginPin = document.getElementById("login-pin").value.trim();
  const errorMessage = document.getElementById("error-message");

  if (!loginNumber || !loginPin) {
    errorMessage.innerText = "Please fill all fields";
    errorMessage.classList.remove("hidden");
    return;
  }

  if (loginNumber === validNumber && loginPin === validPin) {
    errorMessage.classList.add("hidden");
    window.location.href = "./main.html";
  } else {
    errorMessage.innerText = "Invalid mobile number or PIN";
    errorMessage.classList.remove("hidden");
    document.getElementById("login-pin").value = "";
    document.getElementById("login-pin").focus();
  }
});
