// login button functionality
document.getElementById("mobile-number").value = "12345678910";
document.getElementById("pin-number").value = "1234";
document.getElementById("login-btn").addEventListener("click", function (event) {
  event.preventDefault();
  const validMobileNumber = "12345678910";
  const validPin = "1234";

  const mobileNumber = document.getElementById("mobile-number").value.trim();
  const pinNumber = document.getElementById("pin-number").value.trim();
  const errorMessage = document.getElementById("error-message");

  if (!mobileNumber || !pinNumber) {
    errorMessage.innerText = "Please fill all fields";
    errorMessage.classList.remove("hidden");
    return;
  }

  if (mobileNumber === validMobileNumber && pinNumber === validPin) {
    errorMessage.classList.add("hidden");
    window.location.href = "./home-page.html";
  } else {
    errorMessage.innerText = "Invalid mobile number or PIN";
    errorMessage.classList.remove("hidden");
    document.getElementById("pin-number").value = "";
    document.getElementById("pin-number").focus();
  }
});
