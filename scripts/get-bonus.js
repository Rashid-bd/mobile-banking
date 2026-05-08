document.getElementById("get-bonus").addEventListener("click", function (event) {
  window.location.href = "./get-bonus.html";
});

document.getElementById("bonus-btn").addEventListener("click", function (event) {
  event.preventDefault();
  const balance = document.getElementById("main-balance");
  let currentBalance = parseFloat(balance.innerText);
  const bonus = document.getElementById("bonus").value;
//   console.log(bonus);

  if (bonus === "PAYOOO100") {
    currentBalance += 100;
    balance.innerText = currentBalance;
    alert("Successfully added the bonus");
  } else{
    alert("Invalid coupon");
  }
  document.getElementById("bonus-form").reset();
});
