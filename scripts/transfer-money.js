document.getElementById("transfer-money").addEventListener('click', function(event){
    window.location.href="./transfer-money.html";
})

document.getElementById("send-btn").addEventListener("click", function (event) {
  event.preventDefault();
  const balance = document.getElementById("main-balance");
  const currentBalance = parseFloat(balance.innerText);
  // console.log(currentBalance);

  const userAccount = document.getElementById("user-account").value;
  // console.log(userAccount);

  const sendMoney= parseFloat(document.getElementById("send-amount").value);
  // console.log(sendMoney);

  const pin = document.getElementById("pin-number").value;

  if (isNaN(userAccount) || userAccount.length !== 11) {
    alert("please enter a valid user account");
    return;
  }
  if (isNaN(sendMoney) || sendMoney <= 0 || sendMoney > currentBalance) {
    alert("please enter valid amount");
    return;
  }
  if (pin !== "1234") {
    alert("Wrong PIN");
    document.getElementById("pin-number").value = "";
    return;
  }
  // balance update
  const newBalance = currentBalance - sendMoney;
  balance.innerText = newBalance;
  alert("Send Money Successful");
  document.getElementById("transfer-form").reset();
});
