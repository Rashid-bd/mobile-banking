document.getElementById("pay-bill").addEventListener("click", function (event) {
  window.location.href = "./pay-bill.html";
});

document.getElementById("pay-bill-btn").addEventListener("click", function (event) {
  event.preventDefault();
  const balance = document.getElementById("main-balance");
  const currentBalance = parseFloat(balance.innerText);
  const bank = document.getElementById("bank-name").value;
//   console.log(bank);
  const accountNumber = document.getElementById("account-number").value;
//   console.log(accountNumber);
  const payAmount = document.getElementById("pay-amount").value;
  const pin = document.getElementById("pin-number").value;

  if(!bank){
    alert("Please choose a bank");
    this.removeAttributeNS;
  }
  if(isNaN(accountNumber) || accountNumber.length !== 11){
    alert("Please enter a valid account number");
    return;
  }
  if(payAmount > currentBalance){
    alert("Insufficient Balance");
    return;
  } else if(isNaN(payAmount) || payAmount <= 0){
    alert("Please enter valid amount to pay");
    return;
  }
  if(pin !== '1234'){
    alert("Wrong Pin");
    return;
  }

  const newBalance = currentBalance - payAmount;
  balance.innerText = newBalance;
  alert("Bill Paid Successfully");
  document.getElementById("pay-bill-form").reset();
});
