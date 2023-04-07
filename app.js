const CarForm = document.getElementById("config-form");
const Back = document.getElementById("backButton");
const Buy = document.getElementById("buy-button");
const UserName = document.getElementById("UserName");
const CarList = document.getElementById("car-list");
const Equipment = document.getElementById("Equipment");
const Title = document.getElementById("Title");
const CustomerName = document.getElementById("customerName");
const buyBtns = document.querySelectorAll(".buy-btn");
const Src = document.getElementById("wyszukaj");
const FormCarData = document.getElementById("car-form");
const imgX = document.querySelector(".imgX");
const imgY = document.querySelector(".imgY");

Back.addEventListener("click", () => {
  CarForm.classList.toggle("hidden");
  CarList.classList.toggle("hidden");
  Src.classList.toggle("hidden");
  Title.innerHTML = "Zakup Auta";
});

buyBtns.forEach(function (buyBtn) {
  buyBtn.addEventListener("click", function () {
    CarForm.classList.toggle("hidden");
    CarList.classList.toggle("hidden");
    Src.classList.toggle("hidden");
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
      imgY.src = "img/mustang.jpeg";
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
      imgY.src = "img/Audi-A3.jpeg";
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
      imgY.src = "img/mercedes.jpeg";
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
      imgY.src = "img/bmw-x5.jpeg";
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
      imgY.src = "img/Audi-A4.jpeg";
    }
  });
});

const NameError = document.getElementById("NameError");

CustomerName.addEventListener("input", () => {
  UserName.innerHTML = "Imie i nazwisko:<br><br>" + CustomerName.value;
});

const deliveryDateSelect = document.getElementById("deliveryDateSelect");

function isInputEmpty() {
  if (CustomerName.value.trim().split(" ").length !== 2) {
    return true;
  }

  return false;
}

function showInputError() {
  CustomerName.setCustomValidity("Podaj imię i nazwisko");
  CustomerName.classList.add("input--error");
  NameError.classList.remove("hidden");
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

for (let i = 0; i < 11; i++) {
  const option = document.createElement("option");
  option.value = deliveryDate.toISOString();
  option.text = deliveryDate.toLocaleDateString();
  deliveryDateSelect.add(option);

  deliveryDate.setDate(deliveryDate.getDate() + 1);
}

const selectedDeliveryDateLabel = document.getElementById(
  "selectedDeliveryDateLabel"
);

deliveryDateSelect.addEventListener("change", () => {
  const selectedDate = new Date(deliveryDateSelect.value);
  const formattedDate = selectedDate.toLocaleDateString();
  selectedDeliveryDateLabel.textContent = "Data dostawy " + formattedDate;
});

const Summary = document.getElementById("Summary");
const SummaryDiv = document.getElementById("SummaryDiv");

function clearLocalStorage() {
  localStorage.clear();
}

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
      const selectedPayWay = document.querySelector("input.PayWay:checked");
      const payWayText = selectedPayWay.value;

      const accessories = document.getElementsByName("accessories");
      let total = 0;
      for (let i = 0; i < accessories.length; i++) {
        if (accessories[i].checked) {
          switch (accessories[i].value) {
            case "nr1":
              total += 100;
              break;
            case "nr2":
              total += 200;
              break;
            case "nr3":
              total += 300;
              break;
          }
        }
      }

      if (Title.innerHTML === "Ford Mustang") {
        imgX.src = "img/mustang.jpeg";
      } else if (Title.innerHTML === "Audi-A4") {
        imgX.src = "img/Audi-A4.jpeg";
      } else if (Title.innerHTML === "Audi-A3") {
        imgX.src = "img/Audi-A3.jpeg";
      } else if (Title.innerHTML === "BMW-X5") {
        imgX.src = "img/bmw-x5.jpeg";
      } else if (Title.innerHTML === "Mercedes-Benz C-Class") {
        imgX.src = "img/mercedes.jpeg";
      }

      const SummaryTxt = `Gratuluję ${
        CustomerName.value
      } dokonałeś zakupu samochodu ${Title.innerHTML} za ${
        Price + total
      } PLN. ${
        selectedDeliveryDateLabel.textContent
      }. Typ finansowania: ${payWayText}. Dziękujemy za skorzystanie z naszych usług.`;
      CarForm.classList.toggle("hidden");
      Summary.classList.toggle("hidden");
      SummaryDiv.innerHTML = SummaryTxt;
      clearLocalStorage();
    }
  }
});

document.getElementById("ButtonToBack").addEventListener("click", () => {
  CarList.classList.toggle("hidden");
  Summary.classList.add("hidden");
});
