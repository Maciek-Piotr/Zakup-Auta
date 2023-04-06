// Funkcja zapisująca wybraną datę w localStorage
function saveSelectedDate() {
  const selectElement = document.getElementById("deliveryDateSelect");
  const selectedDate = selectElement.options[selectElement.selectedIndex].value;
  localStorage.setItem("selectedDate", selectedDate);
}

// Funkcja ustawiająca zapisaną datę jako zaznaczoną opcję w select po odświeżeniu strony
function restoreSelectedDate() {
  const selectElement = document.getElementById("deliveryDateSelect");
  const savedDate = localStorage.getItem("selectedDate");
  if (savedDate) {
    for (let i = 0; i < selectElement.options.length; i++) {
      if (selectElement.options[i].value === savedDate) {
        selectElement.selectedIndex = i;
        break;
      }
    }
  }
}

// Wywołanie funkcji restoreSelectedDate przy ładowaniu strony
restoreSelectedDate();

// Dodanie listenera na zmianę selecta, który wywoła funkcję saveSelectedDate
document
  .getElementById("deliveryDateSelect")
  .addEventListener("change", saveSelectedDate);
