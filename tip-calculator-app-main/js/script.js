document.addEventListener("DOMContentLoaded", function () {
  const billTotalInput = document.getElementById("bill-total");
  const peopleTotalInput = document.getElementById("people-total");
  const customTipInput = document.getElementById("custom-tip");
  const tipButtons = document.querySelectorAll(".btn-percent");
  const totalTipOutput = document.querySelector(".total-tip");
  const totalDueOutput = document.querySelector(".total-due");
  const resetButton = document.querySelector(".btn-reset");
  let tipPercent = 0;

  // Event handlers
  billTotalInput.addEventListener("input", calculateTotal);
  customTipInput.addEventListener("input", function () {
    tipPercent = customTipInput.value;
    calculateTotal();
  });
  peopleTotalInput.addEventListener("input", calculateTotal);
  resetButton.addEventListener("click", resetCalculator);

  tipButtons.forEach((button) => {
    button.addEventListener("click", e => {
      e.preventDefault();
      tipPercent = parseFloat(button.textContent.replace(/\$/g, ""));
      calculateTotal();
    });
  });

  // Calculate total
  function calculateTotal() {
    const billValue = parseFloat(billTotalInput.value.trim());
    const peopleValue = parseFloat(peopleTotalInput.value.trim());
    const errorCodes = document.querySelectorAll(".label span");
    if (isNaN(billValue) || billValue <= 0) {
      billTotalInput.classList.add("error");
      errorCodes[0].textContent = "Can't be zero.";
    } else {
      billTotalInput.classList.remove("error");
      errorCodes[0].textContent = "";
    }
    if (isNaN(peopleValue) || peopleValue <= 0) {
      peopleTotalInput.classList.add("error");
      errorCodes[1].textContent = "Can't be zero.";
    } else {
      peopleTotalInput.classList.remove("error");
      errorCodes[1].textContent = "";
    }

    if (!billTotalInput.classList.contains("error") && !peopleTotalInput.classList.contains("error")) {
      updateTotal();
    }

    function updateTotal() {
      const billTotal = parseFloat(billTotalInput.value);
      const numberOfPeople = parseFloat(peopleTotalInput.value);
      const tipAmount = parseFloat(billTotal * (tipPercent / 100) / numberOfPeople);
      const totalDue = parseFloat(billTotal / numberOfPeople + tipAmount);

      totalTipOutput.textContent = `$${tipAmount.toFixed(2)}`;
      totalDueOutput.textContent = `$${totalDue.toFixed(2)}`;
    }
  }

  function resetCalculator() {
    billTotalInput.value = "";
    customTipInput.value = "";
    customTipInput.dataset.tip = "0";
    peopleTotalInput.value = "";
    totalTipOutput.textContent = "$0.00";
    totalDueOutput.textContent = "$0.00";
  }
});