// Pobranie elementów formularza
const carForm = document.getElementById("carForm");
const customerNameInput = document.getElementById("customerName");
const xxl = document.getElementById("deliveryDateSelect");
const accessoriesCheckboxes = document.getElementsByName("accessories");

// Funkcja zapisująca dane do localStorage
function saveDataToLocalStorage() {
  localStorage.setItem("customerName", customerNameInput.value);
  localStorage.setItem("deliveryDate", xxl.value);

  const selectedAccessories = [];
  accessoriesCheckboxes.forEach((checkbox) => {
    if (checkbox.checked) {
      selectedAccessories.push(checkbox.value);
    }
  });
  localStorage.setItem("accessories", JSON.stringify(selectedAccessories));
}

// Zapisanie danych do localStorage w momencie wprowadzania zmian w polach formularza
carForm.addEventListener("input", saveDataToLocalStorage);

// Przywrócenie zapisanych danych z localStorage po załadowaniu strony
window.addEventListener("load", () => {
  if (localStorage.getItem("customerName")) {
    customerNameInput.value = localStorage.getItem("customerName");
  }
  if (localStorage.getItem("deliveryDate")) {
    xxl.value = localStorage.getItem("deliveryDate");
  }
  if (localStorage.getItem("accessories")) {
    const selectedAccessories = JSON.parse(localStorage.getItem("accessories"));
    accessoriesCheckboxes.forEach((checkbox) => {
      if (selectedAccessories.includes(checkbox.value)) {
        checkbox.checked = true;
      }
    });
  }
});
