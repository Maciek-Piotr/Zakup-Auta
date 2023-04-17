const carForm = document.getElementById("configForm");
const backBtn = document.getElementById("backButton");
const buybutton = document.getElementById("buyButton");
const userName = document.getElementById("userName");
const carList = document.getElementById("carListSectiom");
const equipment = document.getElementById("equipment");
const title = document.getElementById("title");
const customerName = document.getElementById("customerName");
const buyBtns = document.querySelectorAll(".buyBtn");
const srcInput = document.getElementById("src");
const imgX = document.querySelector(".imgX");
const imgY = document.querySelector(".imgY");

backBtn.addEventListener("click", () => {
  carForm.classList.toggle("hidden");
  carList.classList.toggle("hidden");
  srcInput.classList.toggle("hidden");
  nameError.classList.add("hidden");
  customerName.classList.remove('input--error')
  title.innerHTML = "Zakup Auta";
});

let Price = 0;
const ChangePrice = () => {
  if (title.innerHTML === "Audi-A4") {
    Price = 79900;
  }
  if (title.innerHTML === "Audi-A3") {
    Price = 87500;
  }
  if (title.innerHTML === "BMW-X5") {
    Price = 189000;
  }
  if (title.innerHTML === "Mercedes-Benz C-Class") {
    Price = 109900;
  }
  if (title.innerHTML === "Ford Mustang") {
    Price = 199000;
  }
};

buyBtns.forEach(function (buyBtn) {
  buyBtn.addEventListener("click", function () {
    carForm.classList.toggle("hidden");
    carList.classList.toggle("hidden");
    srcInput.classList.toggle("hidden");

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

    if (buyBtn.classList.contains("FordMustang")) {
      title.innerHTML = "Ford Mustang";
      equipment.innerHTML =
        "<ul>" +
        "<li>Rok produkcji: 1969</li>" +
        "<li>Moc silnika: 250 KM</li>" +
        "<li>Przebieg: 120 000 km</li>" +
        `<li>Cena: ${199000} PLN</li>` +
        "</ul>" +
        "<p>Najszybsza dostawa możliwa w ciągu 14 dni od daty zamówienia</p>";
      imgY.src = "img/mustang.jpeg";
    }
    if (buyBtn.classList.contains("Audi-A3")) {
      title.innerHTML = "Audi-A3";
      equipment.innerHTML =
        "<ul>" +
        "<li>Rok produkcji: 2018</li>" +
        "<li>Moc silnika: 150 KM</li>" +
        "<li>Przebieg: 35 000 km</li>" +
        `<li>Cena: ${87500} PLN</li>` +
        "</ul>" +
        "<p>Najszybsza dostawa możliwa w ciągu 14 dni od daty zamówienia</p>";
      imgY.src = "img/Audi-A3.jpeg";
    }
    if (buyBtn.classList.contains("Mercedes-Benz")) {
      title.innerHTML = "Mercedes-Benz C-Class";
      equipment.innerHTML =
        "<ul>" +
        "<li>Rok produkcji: 2019</li>" +
        "<li>Moc silnika: 170 KM</li>" +
        "<li>Przebieg: 45 000 km</li>" +
        `<li>Cena: ${109900} PLN</li>` +
        "</ul>" +
        "<p>Najszybsza dostawa możliwa w ciągu 14 dni od daty zamówienia</p>";
      imgY.src = "img/mercedes.jpeg";
    }
    if (buyBtn.classList.contains("BMW-X5")) {
      title.innerHTML = "BMW-X5";
      equipment.innerHTML =
        "  <ul>" +
        " <li>Rok produkcji: 2020</li>" +
        " <li>Moc silnika: 265 KM</li>" +
        "<li>Przebieg: 20 000 km</li>" +
        `<li>Cena: ${189000} PLN</li>` +
        "</ul>" +
        "<p>Najszybsza dostawa możliwa w ciągu 14 dni od daty zamówienia</p>";
      imgY.src = "img/bmw-x5.jpeg";
    }
    if (buyBtn.classList.contains("Audi-A4")) {
      title.innerHTML = "Audi-A4";
      equipment.innerHTML =
        "<ul>" +
        "<li>Rok produkcji: 2018</li>" +
        "<li>Moc silnika: 150 KM</li>" +
        "<li>Przebieg: 70 000 km</li>" +
        `<li>Cena: ${79900} PLN</li>` +
        "</ul>" +
        "<p>Najszybsza dostawa możliwa w ciągu 14 dni od daty zamówienia</p>";
      imgY.src = "img/Audi-A4.jpeg";
    }
  });
});

const nameError = document.getElementById("nameError");

customerName.addEventListener("input", () => {
  userName.innerHTML = "Imie i nazwisko:<br><br>" + customerName.value;
});

const deliveryDateSelect = document.getElementById("deliveryDateSelect");

function isInputEmpty() {
  if (customerName.value.trim().split(" ").length !== 2) {
    return true;
  }

  return false;
}

function showInputError() {
  customerName.setCustomValidity("Podaj imię i nazwisko");
  customerName.classList.add("input--error");
  nameError.classList.remove("hidden");
}

function hideInputError() {
  customerName.setCustomValidity("");
  customerName.classList.remove("input--error");
}

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

buybutton.addEventListener("click", () => {
  if (isInputEmpty()) {
    showInputError();
    window.scrollTo(
      0,
      document.documentElement.scrollHeight - window.innerHeight
    );
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

      if (title.innerHTML === "Ford Mustang") {
        imgX.src = "img/mustang.jpeg";
      } else if (title.innerHTML === "Audi-A4") {
        imgX.src = "img/Audi-A4.jpeg";
      } else if (title.innerHTML === "Audi-A3") {
        imgX.src = "img/Audi-A3.jpeg";
      } else if (title.innerHTML === "BMW-X5") {
        imgX.src = "img/bmw-x5.jpeg";
      } else if (title.innerHTML === "Mercedes-Benz C-Class") {
        imgX.src = "img/mercedes.jpeg";
      }

      const SummaryTxt = `GRATULUJĘ!! ${
        customerName.value
      } dokonałeś zakupu samochodu ${title.innerHTML} za ${
        Price + total
      } PLN. ${
        selectedDeliveryDateLabel.textContent
      }. Typ finansowania: ${payWayText}. Dziękujemy za skorzystanie z naszych usług.`;
      carForm.classList.toggle("hidden");
      Summary.classList.toggle("hidden");
      SummaryDiv.innerHTML = SummaryTxt;
      clearLocalStorage();
    }
  }
});

document.getElementById("ButtonToBack").addEventListener("click", () => {
  carList.classList.toggle("hidden");
  Summary.classList.add("hidden");
});
