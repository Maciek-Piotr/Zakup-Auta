const CarForm = document.getElementById("config-form");
const Back = document.getElementById("backButton");
const Buy = document.getElementById("buy-button");
const UserName = document.getElementById("UserName");
const CarList = document.getElementById("car-list");
const Equipment = document.getElementById("Equipment");
const Title = document.getElementById("Title");
const CustomerName = document.getElementById("customerName");
const buyBtns = document.querySelectorAll(".buy-btn");

Back.addEventListener("click", () => {
  CarForm.classList.toggle("hidden");
  CarList.classList.toggle("hidden");
  Title.innerHTML = "Zakup Auta";
});

buyBtns.forEach(function (buyBtn) {
  buyBtn.addEventListener("click", function () {
    CarForm.classList.toggle("hidden");
    CarList.classList.toggle("hidden");
    if (buyBtn.classList.contains("Ford-Mustang")) {
      Title.innerHTML = "Ford Mustang";
      Equipment.innerHTML =
        "<ul>" +
        "<li>Rok produkcji: 1969</li>" +
        "<li>Moc silnika: 250 KM</li>" +
        "<li>Przebieg: 120 000 km</li>" +
        "<li>Cena: 199 000 PLN</li>" +
        "</ul>" +
        "<p>Najszybsza dostawa możliwa w ciągu 14 dni od daty zamówienia</p>";
    }
    if (buyBtn.classList.contains("Audi-A3")) {
      Title.innerHTML = "Audi-A3";
      Equipment.innerHTML =
        "<ul>" +
        "<li>Rok produkcji: 2018</li>" +
        "<li>Moc silnika: 150 KM</li>" +
        "<li>Przebieg: 35 000 km</li>" +
        "<li>Cena: 87 500 PLN</li>" +
        "</ul>" +
        "<p>Najszybsza dostawa możliwa w ciągu 14 dni od daty zamówienia</p>";
    }
    if (buyBtn.classList.contains("Mercedes-Benz")) {
      Title.innerHTML = "Mercedes-Benz C-Class";
      Equipment.innerHTML =
        "<ul>" +
        "<li>Rok produkcji: 2019</li>" +
        "<li>Moc silnika: 170 KM</li>" +
        "<li>Przebieg: 45 000 km</li>" +
        "<li>Cena: 109 900 PLN</li>" +
        "</ul>" +
        "<p>Najszybsza dostawa możliwa w ciągu 14 dni od daty zamówienia</p>";
    }
    if (buyBtn.classList.contains("BMW-X5")) {
      Title.innerHTML = "BMW-X5";
      Equipment.innerHTML =
        "  <ul>" +
        " <li>Rok produkcji: 2020</li>" +
        " <li>Moc silnika: 265 KM</li>" +
        "<li>Przebieg: 20 000 km</li>" +
        "<li>Cena: 189 000 PLN</li>" +
        "</ul>" +
        "<p>Najszybsza dostawa możliwa w ciągu 14 dni od daty zamówienia</p>";
    }
    if (buyBtn.classList.contains("Audi-A4")) {
      Title.innerHTML = "Audi-A4";
      Equipment.innerHTML =
        "<ul>" +
        "<li>Rok produkcji: 2018</li>" +
        "<li>Moc silnika: 150 KM</li>" +
        "<li>Przebieg: 70 000 km</li>" +
        "<li>Cena: 79 900 PLN</li>" +
        "</ul>" +
        "<p>Najszybsza dostawa możliwa w ciągu 14 dni od daty zamówienia</p>";
    }
  });
});

CustomerName.addEventListener("input", () => {
  UserName.innerHTML = "Imie i nazwisko:<br><br>" + CustomerName.value;
});

const deliveryDateSelect = document.getElementById("deliveryDateSelect");

function isInputEmpty() {
  return CustomerName.value.trim() === "";
}

function showInputError() {
  CustomerName.setCustomValidity("Podaj imię i nazwisko");
  CustomerName.classList.add("input--error");
}

function hideInputError() {
  CustomerName.setCustomValidity("");
  CustomerName.classList.remove("input--error");
}

let Price = 0;
const ChangePrice = () => {
  if (Title.innerHTML === "Audi-A4") {
    Price = 79900;
  }
  if (Title.innerHTML === "Audi-A3") {
    Price = 87500;
  }
  if (Title.innerHTML === "BMW-X5") {
    Price = 189000;
  }
  if (Title.innerHTML === "Mercedes-Benz C-Class") {
    Price = 109900;
  }
  if (Title.innerHTML === "Ford Mustang") {
    Price = 199000;
  }
};

const deliveryDate = new Date();
deliveryDate.setDate(deliveryDate.getDate() + 14);

for (let i = 0; i < 10; i++) {
  const option = document.createElement("option");
  option.value = deliveryDate.toISOString();
  option.text = deliveryDate.toLocaleDateString();
  deliveryDateSelect.add(option);

  deliveryDate.setDate(deliveryDate.getDate() + 1);
}

// const deliveryDateSelect = document.getElementById("deliveryDateSelect");
const selectedDeliveryDateLabel = document.getElementById(
  "selectedDeliveryDateLabel"
);

deliveryDateSelect.addEventListener("change", () => {
  const selectedDate = new Date(deliveryDateSelect.value);
  const formattedDate = selectedDate.toLocaleDateString();
  selectedDeliveryDateLabel.textContent = "Data dostawy " + formattedDate;
});

Buy.addEventListener("click", () => {
  if (isInputEmpty()) {
    showInputError();
  } else {
    hideInputError();

    ChangePrice();
    if (
      selectedDeliveryDateLabel.textContent === "Data dostawy:" ||
      selectedDeliveryDateLabel.textContent === "Data dostawy Invalid Date"
    ) {
      alert("Wybierz datę!!!");
    } else {
      alert(
        `Gratuluję ${CustomerName.value} dokonałeś zakupu samochodu ${Title.innerHTML} za ${Price} PLN. ${selectedDeliveryDateLabel.textContent}. Typ finansowania:`
      );
    }
  }
});
