let btn = document.getElementById("btn");

btn.addEventListener("click", function () {
  let billAmount = document.getElementById("bill-amount").value;
  let tipPercentage = document.getElementById("tip-percentage").value;
  let tipAmount = tipPercentage > 0 ? (billAmount / tipPercentage) : 0;
  let numberOfPeople = document.getElementById("number-people").value;

  let billTotal = parseFloat(billAmount) + parseFloat(tipAmount);
  let totalPerPerson = document.getElementById("total-per-person");
  let finalAmount = new Intl.NumberFormat("en-IN", { style: 'currency', currency: 'GBP' }).format(
    billTotal / numberOfPeople
  );
    totalPerPerson.innerHTML = finalAmount;
});
