// ========================================================================
// ------------- UI Toggle function for Active card -------------

function setActive(id) {
  document.querySelectorAll(".card-btn").forEach((card) => {
    // class reset to default card
    card.className =
      "card-btn cursor-pointer hover:border-blue-400 hover:bg-blue-50 hover:scale-105 hover:shadow-md transition duration-300 flex flex-col justify-center items-center border border-gray-200 rounded-xl text-center shadow-sm p-4 text-sm text-[#080808]/70";
  });

  // class set to active card
  document.getElementById(id).className =
    "card-btn cursor-auto scale-105 flex flex-col justify-center items-center bg-[#0874F2]/15 border-2 border-blue-400 rounded-xl text-center shadow-sm p-4 text-sm font-bold text-[#0874F2]";
}

// ========================================================================
// ------------ toggle function to show input field------------

function toggleInput(id) {
  const forms = document.getElementsByClassName("input-form");
  for (const form of forms) {
    form.style.display = "none";
  }
  document.getElementById(id).style.display = "block";
}

// ------------ add money input field show -----------

document.getElementById("add-money").addEventListener("click", function (event) {
  event.preventDefault();
  setActive("add-money");
  toggleInput("add-money-container");
});

// ------------- cashout input field show --------------

document.getElementById("cashout").addEventListener("click", function (event) {
  event.preventDefault();
  setActive("cashout");
  toggleInput("cash-out-container");
});

// ------------- send money input field show --------------

document.getElementById("send-money").addEventListener("click", function (event) {
  event.preventDefault();
  setActive("send-money");
  toggleInput("send-money-container");
});

// ------------- get bonus input field show --------------

document.getElementById("get-bonus").addEventListener("click", function (event) {
  event.preventDefault();
  setActive("get-bonus");
  toggleInput("get-bonus-container");
});

// ------------- pay bill input field show --------------

document.getElementById("pay-bill").addEventListener("click", function (event) {
  event.preventDefault();
  setActive("pay-bill");
  toggleInput("pay-bill-container");
});

// ------------- transaction field show --------------

document.getElementById("transactions").addEventListener("click", function (event) {
  event.preventDefault();
  setActive("transactions");
  toggleInput("transaction-container");
});

// =========================================================================
// ---------- reusable function to get value from input field----------

function getValue(id) {
  return document.getElementById(id).value;
}
function getValueNumber(id) {
  const val = document.getElementById(id).value;
  return parseInt(val);
}
function getTextNumber(id) {
  const innerText = document.getElementById(id).innerText;
  return parseInt(innerText);
}
function setBalance(value) {
  const balance = document.getElementById("main-balance");
  balance.innerText = value;
}
// ==========================================================================

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ~~~~~~~~~~~~~~~~~~~~ Add Money Input Field Function~~~~~~~~~~~~~~~~~~

document.getElementById("add-money-btn").addEventListener("click", function (event) {
  event.preventDefault();

  const bank = getValue("bank-name");
  //   console.log(bank);

  const accountNumber = getValue("account-number");
  //   console.log(accountNumber);

  const amount = getValueNumber("add-amount");
  //   console.log(amount);

  const pin = getValue("pin-number");
  //   console.log(pin);

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
  // -------balance update--------
  const balance = getTextNumber("main-balance");
  // console.log(balance);
  const newBalance = balance + amount;
  setBalance(newBalance);
  //   console.log(newBalance);
  alert("Money added successfully");

  document.getElementById("add-money-form").reset();
  addTransaction("Bank Deposit", amount, "./assets/wallet1.png", "add");
});

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ~~~~~~~~~~~~~~~~~~~~CashOut Input Field Function~~~~~~~~~~~~~~~~~~~

document.getElementById("cashout-btn").addEventListener("click", function (event) {
  event.preventDefault();

  const currentBalance = getTextNumber("main-balance");

  const agentNumber = getValue("agent-number");
  //   console.log(agentNumber);

  const amount = getValueNumber("cashout-amount");
  //   console.log(amount);

  const pin = getValue("cashout-pin");
  //   console.log(pin);

  if (isNaN(agentNumber) || agentNumber.length !== 11) {
    alert("please enter a valid agent number");
    return;
  }
  if (isNaN(amount) || amount <= 0 || amount > currentBalance) {
    alert("please enter valid amount");
    return;
  }
  if (pin !== "1234") {
    alert("Wrong PIN");
    document.getElementById("cashout-pin").value = "";
    return;
  }
  // --------balance update-------
  const newBalance = currentBalance - amount;
  setBalance(newBalance);

  alert("Cash Out Successful");
  document.getElementById("cashout-form").reset();
  addTransaction("Cashout", amount, "./assets/send1.png", "cashout");
});

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ~~~~~~~~~~~~~~~~~~ Send Money Input Field Function~~~~~~~~~~~~~~~~~

document.getElementById("send-btn").addEventListener("click", function (event) {
  event.preventDefault();
  const currentBalance = getTextNumber("main-balance");
  // console.log(currentBalance);

  const userAccount = getValue("user-account");
  // console.log(userAccount);

  const amount = getValueNumber("send-amount");
  // console.log(amount);

  const pin = getValue("send-pin");
  //   console.log(pin);

  if (isNaN(userAccount) || userAccount.length !== 11) {
    alert("please enter a valid user account");
    return;
  }
  if (isNaN(amount) || amount <= 0 || amount > currentBalance) {
    alert("please enter valid amount");
    return;
  }
  if (pin !== "1234") {
    alert("Wrong PIN");
    document.getElementById("send-pin").value = "";
    return;
  }

  // --------balance update-------
  const newBalance = currentBalance - amount;
  setBalance(newBalance);
  alert("Send Money Successful");
  document.getElementById("send-money-form").reset();
  addTransaction("Send Money", amount, "./assets/money1.png", "send");
});

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ~~~~~~~~~~~~~~~~~~~ Get Bonus Input Field Function~~~~~~~~~~~~~~~~~~~~~~

document.getElementById("get-bonus-btn").addEventListener("click", function (event) {
  event.preventDefault();
  const balance = getTextNumber("main-balance");
  // console.log(currentBalance);
  const coupon = getValue("coupon");
  // console.log(coupon);

  if (coupon === "PAYOOO100") {
    const addBonus = balance + 100;
    // console.log(addBonus);
    setBalance(addBonus);
    alert("Successfully added the bonus");
  } else {
    alert("Invalid coupon");
  }
  document.getElementById("bonus-form").reset();
  addTransaction("Get Bonus", 100, "./assets/bonus1.png", "add");
});

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ~~~~~~~~~~~~~~~~~~~ Pay Bill Input Field Function ~~~~~~~~~~~~~~~~~~~

document.getElementById("pay-bill-btn").addEventListener("click", function (event) {
  event.preventDefault();

  const balance = getTextNumber("main-balance");
  //   console.log(balance);

  const bank = getValue("pay-bank");
  // console.log(bank);

  const accountNumber = getValue("biller-account");
  // console.log(accountNumber);

  const amount = getValueNumber("pay-amount");
  console.log(amount);

  const pin = getValue("pay-pin");
  // console.log(pin);

  if (!bank) {
    alert("Please choose a bank");
    return;
  }
  if (isNaN(accountNumber) || accountNumber.length !== 11) {
    alert("Please enter a valid account number");
    return;
  }
  if (amount > balance) {
    alert("Insufficient Balance");
    return;
  } else if (isNaN(amount) || amount <= 0) {
    alert("Please enter valid amount to pay");
    return;
  }
  if (pin !== "1234") {
    alert("Wrong Pin");
    return;
  }

  const newBalance = balance - amount;
  setBalance(newBalance);
  alert("Bill Paid Successfully");
  document.getElementById("pay-bill-form").reset();
  addTransaction("Pay Bill", amount, "./assets/purse1.png", "pay");
});

// =============================================================================
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ~~~~~~~~~~~~~~~~~~~ Transaction Section's Function ~~~~~~~~~~~~~~~~~~~

// ------------ create array to show transaction ------------
const transactionData = [];

function addTransaction(title, amount, icon, type) {
  const data = {
    title: title,
    amount: amount,
    icon: icon,
    type: type,
    date: new Date().toLocaleString(),
  };
  transactionData.push(data);
  showTransactions()
}

function showTransactions() {
  const transactionContainer = document.getElementById("transaction-container");
  transactionContainer.innerHTML = "";
  for (const item of transactionData) {
    const div = document.createElement("div");
    div.className = "flex justify-between items-center bg-white rounded-lg shadow-sm px-4 py-3 mb-3";

    div.innerHTML = `
      <div class="flex items-center gap-4">
        <div class="bg-[#F4F5F7] p-2 rounded-full">
          <img src="${item.icon}" class="w-6 h-6" />
        </div>
        <div>
          <p class="text-sm font-medium">${item.title}</p>
          <span class="text-xs text-gray-500">${item.date}</span>
        </div>
      </div>

      <div>
        <span class="text-sm font-semibold ${item.type === "add" ? "text-green-600" : "text-red-500"}">
        ${item.type === "add" ? "+" : "-"}
        TK ${item.amount}
        </span>
      </div>
    `;
    transactionContainer.prepend(div);
  }
}
// ===============================================================================
