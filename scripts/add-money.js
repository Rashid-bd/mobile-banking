document.getElementById("add-money").addEventListener("click", function (event) {
  event.preventDefault();
  window.location.href = "./add-money.html";
});

document.getElementById("add-money-btn").addEventListener("click", function (event) {
  event.preventDefault();

  const bank = document.getElementById("bank-name").value;
  // console.log(bank);

  const accountNumber = document.getElementById("account-number").value;
  // console.log(accountNumber);

  const amount = parseFloat(document.getElementById("add-amount").value);
  // console.log(amount);

  const pin = document.getElementById("pin-number").value;
  // console.log(pin);

  if (!bank) {
    alert("Please select a Bank");
    return;
  }

  if (accountNumber.length !== 11) {
    alert("Account number must be valid and 11 digits");
    return;
  }

  if (isNaN(amount) || amount <= 0) {
    alert("Enter valid amount");
    return;
  }

  if (pin !== "1234") {
    alert("Wrong PIN");
    document.getElementById("pin-number").value = "";
    return;
  }

  const balance = document.getElementById("main-balance");
  // console.log(balance);

  const currentBalance = parseFloat(balance.innerText);
  // console.log(currentBalance);

  const newBalance = currentBalance + amount;

  balance.innerText = newBalance;

  alert("Money added successfully");

  document.getElementById("add-money-form").reset();
});
