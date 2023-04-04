// const carItems = document.querySelectorAll(".car-item");
const CarForm = document.getElementById("config-form");
const Back = document.getElementById("backButton");
const Buy = document.getElementById("buy-button");
const UserName = document.getElementById("UserName");
const CustomerName = document.getElementById("customerName");
const buyBtns = document.querySelectorAll(".buy-btn");

// carItems.forEach((car) => {
//   const buyBtn = car.querySelector(".buy-btn");
//   const brand = car.dataset.brand;
//   const model = car.dataset.model;
//   const price = car.dataset.price;

// buyBtn.addEventListener("click", () => {
//   // alert(`Gratulacje! Kupiłeś ${brand} ${model} za ${price} PLN.`);

// });
// });

Back.addEventListener("click", () => {
  CarForm.classList.toggle("hidden");
});

buyBtns.forEach(function (buyBtn) {
  buyBtn.addEventListener("click", function () {
    CarForm.classList.toggle("hidden");
  });
});

CustomerName.addEventListener("input", () => {
  UserName.textContent = CustomerName.value;
});
// kkks
