const CarForm = document.getElementById("config-form");
const Back = document.getElementById("backButton");
const Buy = document.getElementById("buy-button");
const UserName = document.getElementById("UserName");
const CarList = document.getElementById("car-list");
const Equipment = document.getElementById("Equipment");
const Title = document.getElementById("Title");
const CustomerName = document.getElementById("customerName");
const buyBtns = document.querySelectorAll(".buy-btn");

const FormData = document.getElementById("car-form");


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

const NameError = document.getElementById("NameError")

CustomerName.addEventListener("input", () => {
  UserName.innerHTML = "Imie i nazwisko:<br><br>" + CustomerName.value;
});

const deliveryDateSelect = document.getElementById("deliveryDateSelect");

function isInputEmpty() {
  if (CustomerName.value.trim().split(' ').length !== 2) {
    return true;
  }

  return false;
}

function showInputError() {
  CustomerName.setCustomValidity("Podaj imię i nazwisko");
  CustomerName.classList.add("input--error");
  NameError.classList.remove('hidden')

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

// const deliveryDateSelect = document.getElementById("deliveryDateSelect");
const selectedDeliveryDateLabel = document.getElementById(
  "selectedDeliveryDateLabel"
);

deliveryDateSelect.addEventListener("change", () => {
  const selectedDate = new Date(deliveryDateSelect.value);
  const formattedDate = selectedDate.toLocaleDateString();
  selectedDeliveryDateLabel.textContent = "Data dostawy " + formattedDate;
});


const Summary = document.getElementById('Summary');
const SummaryDiv = document.getElementById('SummaryDiv');


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
      const selectedPayWay = document.querySelector('input.PayWay:checked');
      const payWayText = selectedPayWay.value

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

      const imgX = document.querySelector('.imgX');

      if (Title.innerHTML === "Ford Mustang") {
        imgX.src = "https://media.istockphoto.com/id/1468164143/es/foto/ford-mustang-coche-americano.jpg?s=612x612&w=0&k=20&c=k4xvEHXVB3clgmp2STW4WGJSp-zzZ0heJr3Jcw8Uz_A=";
      } 
      else if (Title.innerHTML === "Audi-A4") {
        imgX.src = "https://images.unsplash.com/photo-1597007030739-6d2e7172ee5b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGF1ZGklMjBhNHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60";
      }
      else if (Title.innerHTML === "Audi-A3") {
        imgX.src = "https://media.istockphoto.com/id/1279866367/es/foto/vista-frontal-del-audi-negro-a3-aparcado-en-la-calle.jpg?s=612x612&w=0&k=20&c=L_vZxKMkRpxXcNNwoDjhkmmsyn7PJSR9Lxecd8TeRa0=";
      }
      else if  (Title.innerHTML === "BMW-X5") {
        imgX.src = "https://lh3.googleusercontent.com/-jlJuvtdc9PSp_0kLFVkQscl8_XHsT9177fS6BjSFSjNDQCNKztJ3w0oIA1UCZJF3_ed_h7-cCRp64dhtE0qCyiiLvKrvLVPe7q0DYUU";
      }
      else if (Title.innerHTML === "Mercedes-Benz C-Class") {
        imgX.src = "https://media.istockphoto.com/id/642834350/es/foto/mercedes-benz-clase-c.jpg?s=612x612&w=0&k=20&c=dRcuVGqfDiet5JIt3thuNvDBv0aOte2i9jxWYdjF9nE=";
      }
      

      const SummaryTxt = `Gratuluję ${CustomerName.value} dokonałeś zakupu samochodu ${Title.innerHTML} za ${Price + total} PLN. ${selectedDeliveryDateLabel.textContent}. Typ finansowania: ${payWayText}`;
      CarForm.classList.toggle("hidden");
      Summary.classList.toggle("hidden");
      SummaryDiv.innerHTML = SummaryTxt
      console.log(imgX)
      
    }
  }
});

document.getElementById('ButtonToBack').addEventListener("click", () => {

  CarList.classList.toggle("hidden");
  Summary,classList.add('hidden')
})



// // Pobranie elementów formularza
// const carForm = document.querySelector("#carForm");
// const financeTypeInputs = document.querySelectorAll('input[name="financeType"]');
// const customerNameInput = document.querySelector("#customerName");
// const deliverySelectDate = document.querySelector("#deliveryDateSelect");
// const accessoriesCheckboxes = document.querySelectorAll('input[name="accessories"]');

// // Ustawienie wartości formularza na podstawie danych z LocalStorage, jeśli takie są dostępne
// if (localStorage.getItem("carForm")) {
//   const savedFormValues = JSON.parse(localStorage.getItem("carForm"));
//   financeTypeInputs.forEach(input => {
//     input.checked = (input.value === savedFormValues.financeType);
//   });
//   customerNameInput.value = savedFormValues.customerName;
//   deliverySelectDate.value = savedFormValues.deliveryDate;
//   accessoriesCheckboxes.forEach(checkbox => {
//     checkbox.checked = savedFormValues.accessories.includes(checkbox.value);
//   });
// }

// // Zapisywanie wartości formularza do LocalStorage po zmianie
// carForm.addEventListener("change", () => {
//   const formValues = {
//     financeType: "",
//     customerName: "",
//     deliveryDate: "",
//     accessories: []
//   };
//   financeTypeInputs.forEach(input => {
//     if (input.checked) {
//       formValues.financeType = input.value;
//     }
//   });
//   formValues.customerName = customerNameInput.value;
//   formValues.deliveryDate = deliverySelectDate.value;
//   accessoriesCheckboxes.forEach(checkbox => {
//     if (checkbox.checked) {
//       formValues.accessories.push(checkbox.value);
//     }
//   });
//   localStorage.setItem("carForm", JSON.stringify(formValues));
// });

