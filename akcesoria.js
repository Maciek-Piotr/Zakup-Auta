function saveForm() {
  const financeType = document.querySelector(
    'input[name="financeType"]:checked'
  ).value;
  localStorage.setItem("financeType", financeType);

  const accessories = Array.from(
    document.querySelectorAll('input[name="accessories"]:checked')
  ).map((checkbox) => checkbox.value);
  localStorage.setItem("accessories", JSON.stringify(accessories));
}

// zapisz stan w momencie zaznaczenia lub odznaczenia checkboxa
const checkboxes = document.querySelectorAll('input[name="accessories"]');
checkboxes.forEach((checkbox) => {
  checkbox.addEventListener("change", saveForm);
});

// przywróć zapisany stan po załadowaniu strony
window.addEventListener("load", () => {
  const savedFinanceType = localStorage.getItem("financeType");
  if (savedFinanceType) {
    const financeTypeInput = document.querySelector(
      `input[name="financeType"][value="${savedFinanceType}"]`
    );
    financeTypeInput.checked = true;
  }

  const savedAccessories = localStorage.getItem("accessories");
  if (savedAccessories) {
    const savedAccessoriesArray = JSON.parse(savedAccessories);
    savedAccessoriesArray.forEach((accessory) => {
      const accessoryInput = document.querySelector(
        `input[name="accessories"][value="${accessory}"]`
      );
      accessoryInput.checked = true;
    });
  }
});

const checkbox = document.querySelectorAll('input[type="checkbox"]');

checkbox.forEach((checkbox) => {
  checkbox.addEventListener("change", saveForm);
});
