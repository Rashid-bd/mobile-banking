document.getElementById("cashout").addEventListener("click", function (event) {
  window.location.href = "./cashout.html";
});

document.getElementById("cashout-btn").addEventListener("click", function (event) {
  event.preventDefault();
  const balance = document.getElementById("main-balance");
  const currentBalance = parseFloat(balance.innerText);
  // console.log(currentBalance);

  const agentNumber = document.getElementById("agent-number").value;
  // console.log(agentNumber);

  const cashout = parseFloat(document.getElementById("cashout-amount").value);
  // console.log(cashout);

  const pin = document.getElementById("pin-number").value;

  if (isNaN(agentNumber) || agentNumber.length !== 11) {
    alert("please enter a valid agent number");
    return;
  }
  if (isNaN(cashout) || cashout <= 0 || cashout > currentBalance) {
    alert("please enter valid amount");
    return;
  }
  if (pin !== "1234") {
    alert("Wrong PIN");
    document.getElementById("pin-number").value = "";
    return;
  }
  // balance update
  const newBalance = currentBalance - cashout;
  balance.innerText = newBalance;
  alert("Cash Out Successful");
  document.getElementById("cashout-form").reset();
});
