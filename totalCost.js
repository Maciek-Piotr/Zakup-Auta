const accessories = document.getElementsByName("accessories");

for (let i = 0; i < accessories.length; i++) {
  accessories[i].addEventListener("click", function () {
    let totalCost = 0;

    for (let j = 0; j < accessories.length; j++) {
      if (accessories[j].checked) {
        if (accessories[j].value === "nr1") {
          totalCost += 100;
        } else if (accessories[j].value === "nr2") {
          totalCost += 200;
        } else if (accessories[j].value === "nr3") {
          totalCost += 300;
        }
      }
    }
    if (title.innerHTML === "Ford Mustang") {
      equipment.innerHTML =
        "<ul>" +
        "<li>Rok produkcji: 1969</li>" +
        "<li>Moc silnika: 250 KM</li>" +
        "<li>Przebieg: 120 000 km</li>" +
        `<li>Cena: ${199000 + totalCost} PLN</li>` +
        "</ul>" +
        "<p>Najszybsza dostawa możliwa w ciągu 14 dni od daty zamówienia</p>";
      imgY.src = "img/mustang.jpeg";
    }
    if (title.innerHTML === "Audi-A3") {
      equipment.innerHTML =
        "<ul>" +
        "<li>Rok produkcji: 2018</li>" +
        "<li>Moc silnika: 150 KM</li>" +
        "<li>Przebieg: 35 000 km</li>" +
        `<li>Cena: ${87500 + totalCost} PLN</li>` +
        "</ul>" +
        "<p>Najszybsza dostawa możliwa w ciągu 14 dni od daty zamówienia</p>";
      imgY.src = "img/Audi-A3.jpeg";
    }
    if (title.innerHTML === "Mercedes-Benz C-Class") {
      equipment.innerHTML =
        "<ul>" +
        "<li>Rok produkcji: 2019</li>" +
        "<li>Moc silnika: 170 KM</li>" +
        "<li>Przebieg: 45 000 km</li>" +
        `<li>Cena: ${109900 + totalCost} PLN</li>` +
        "</ul>" +
        "<p>Najszybsza dostawa możliwa w ciągu 14 dni od daty zamówienia</p>";
      imgY.src = "img/mercedes.jpeg";
    }
    if (title.innerHTML === "BMW-X5") {
      equipment.innerHTML =
        "  <ul>" +
        " <li>Rok produkcji: 2020</li>" +
        " <li>Moc silnika: 265 KM</li>" +
        "<li>Przebieg: 20 000 km</li>" +
        `<li>Cena: ${189000 + totalCost} PLN</li>` +
        "</ul>" +
        "<p>Najszybsza dostawa możliwa w ciągu 14 dni od daty zamówienia</p>";
      imgY.src = "img/bmw-x5.jpeg";
    }
    if (title.innerHTML === "Audi-A4") {
      equipment.innerHTML =
        "<ul>" +
        "<li>Rok produkcji: 2018</li>" +
        "<li>Moc silnika: 150 KM</li>" +
        "<li>Przebieg: 70 000 km</li>" +
        `<li>Cena: ${79900 + totalCost} PLN</li>` +
        "</ul>" +
        "<p>Najszybsza dostawa możliwa w ciągu 14 dni od daty zamówienia</p>";
      imgY.src = "img/Audi-A4.jpeg";
    }
  });
}
