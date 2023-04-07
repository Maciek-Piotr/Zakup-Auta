// // Funkcja zapisująca wybraną datę w localStorage
// function saveSelectedDate() {
//   const selectElement = document.getElementById("deliveryDateSelect");
//   const selectedDate = selectElement.options[selectElement.selectedIndex].value;
//   localStorage.setItem("selectedDate", selectedDate);
// }

// // Funkcja ustawiająca zapisaną datę jako zaznaczoną opcję w select po odświeżeniu strony
// function restoreSelectedDate() {
//   const selectElement = document.getElementById("deliveryDateSelect");
//   const savedDate = localStorage.getItem("selectedDate");
//   if (savedDate) {
//     for (let i = 0; i < selectElement.options.length; i++) {
//       if (selectElement.options[i].value === savedDate) {
//         selectElement.selectedIndex = i;
//         break;
//       }
//     }
//   }
// }

// // Wywołanie funkcji restoreSelectedDate przy ładowaniu strony
// restoreSelectedDate();

// // Dodanie listenera na zmianę selecta, który wywoła funkcję saveSelectedDate
// document
//   .getElementById("deliveryDateSelect")
//   .addEventListener("change", saveSelectedDate);




// Zmienna przechowująca element select z datami dostawy
const DELIVERY_DATE_SELECT = document.getElementById('deliveryDateSelect');

// Funkcja obsługująca wybór daty
function handleDeliveryDateChange() {
  // Pobranie wartości wybranej daty z elementu select
  const selectedDateBR = DELIVERY_DATE_SELECT.value;
  // Zapisanie wartości do localStorage
  localStorage.setItem('selectedDeliveryDate', selectedDateBR);
}

// Funkcja inicjująca formularz
function initForm() {
  // Sprawdzenie, czy w localStorage jest zapisana wybrana data
  const savedDeliveryDate = localStorage.getItem('selectedDeliveryDate');
  // Jeśli jest, ustawienie jej jako wybranej w elemencie select
  if (savedDeliveryDate) {
    DELIVERY_DATE_SELECT.value = savedDeliveryDate;
  }
  // Dodanie obsługi zdarzenia change do elementu select
  DELIVERY_DATE_SELECT.addEventListener('change', handleDeliveryDateChange);
}

// Wywołanie funkcji inicjującej formularz po załadowaniu strony
window.addEventListener('load', initForm);
