const carItems = document.querySelectorAll(".carItem");
for (const carItem of carItems) {
  const carImage = carItem.querySelector(".carImage");
  const alt = carImage.getAttribute("alt");
  const buyBtn = carItem.querySelector(`.buyBtn.${alt}`);
  carImage.addEventListener("click", () => {
    buyBtn.click();
  });
}
