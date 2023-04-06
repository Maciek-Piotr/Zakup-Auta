// funkcja zapisująca wartość zaznaczonego radio buttona do localStorage
function saveForm() {
  const selectedOption = document.querySelector(
    'input[name="financeType"]:checked'
  ).value;
  localStorage.setItem("selectedOption", selectedOption);
}

// wywołanie funkcji saveForm() przy zmianie zaznaczenia radio buttona
const radioButtons = document.querySelectorAll('input[name="financeType"]');
radioButtons.forEach((radioButton) => {
  radioButton.addEventListener("change", saveForm);
});

// wczytanie wartości z localStorage przy ładowaniu strony
window.addEventListener("load", () => {
  const selectedOption = localStorage.getItem("selectedOption");
  if (selectedOption) {
    const radioButton = document.querySelector(
      `input[name="financeType"][value="${selectedOption}"]`
    );
    if (radioButton) {
      radioButton.checked = true;
    }
  }
});

radioButtons.forEach((radio) => {
  radio.addEventListener("change", () => {
    saveForm();
  });
});
