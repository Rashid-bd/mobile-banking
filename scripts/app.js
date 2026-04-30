// login button functionality

document.getElementById("login-btn").addEventListener("click", function (event) {
  event.preventDefault();
  const validMobileNumber = "12345678910";
  const validPin = "1234";

  const mobileNumber = document.getElementById("mobile-number").value;
  const pinNumber = document.getElementById("pin-number").value;

  if (!mobileNumber || !pinNumber) {
    alert("Please fill all fields");
    return;
  }

  if (mobileNumber === validMobileNumber && pinNumber === validPin) {
    window.location.href = "./home.html";
  } else {
    alert("invalid credential");
  }
});
