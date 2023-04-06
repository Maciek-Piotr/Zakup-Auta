function saveForm() {
  // pobierz wartość pola typ finansowania
  const financeType = document.querySelector(
    'input[name="financeType"]:checked'
  ).value;

  // pobierz wartość pola imię i nazwisko
  const customerName = document.getElementById("customerName").value;

  // pobierz wartość pola data dostawy
  const deliveryDate = document.getElementById("deliveryDateSelect").value;

  // pobierz wartości pól akcesoria
  const accessories = [];
  const accessoryCheckboxes = document.querySelectorAll(
    'input[name="accessories"]:checked'
  );
  accessoryCheckboxes.forEach((checkbox) => {
    accessories.push(checkbox.value);
  });

  // stwórz obiekt z danymi z formularza
  const formData = {
    financeType: financeType,
    customerName: customerName,
    deliveryDate: deliveryDate,
    accessories: accessories,
  };

  // zapisz dane w pamięci przeglądarki
  localStorage.setItem("carFormData", JSON.stringify(formData));
}

const carForm = document.getElementById("carForm");
const inputs = carForm.querySelectorAll("input, select");

inputs.forEach((input) => {
  input.addEventListener("change", saveForm);
});
