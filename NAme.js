const customerNameInput = document.getElementById("customerName");

// funkcja zapisująca wartość pola input w localStorage
function saveCustomerName() {
  localStorage.setItem("customerName", customerNameInput.value);
}

// funkcja ustawiająca wartość pola input na podstawie wartości z localStorage
function setCustomerName() {
  const customerName = localStorage.getItem("customerName");
  if (customerName) {
    customerNameInput.value = customerName;
  }
}

// ustawiamy wartość pola input przy załadowaniu strony
setCustomerName();

// dodajemy event listener na zmianę wartości pola input
customerNameInput.addEventListener("change", saveCustomerName);
