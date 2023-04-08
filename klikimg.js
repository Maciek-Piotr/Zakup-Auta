const carItems = document.querySelectorAll(".car-item");
for (const carItem of carItems) {
  const carImage = carItem.querySelector(".car-image");
  const alt = carImage.getAttribute("alt");
  const buyBtn = carItem.querySelector(`.buy-btn.${alt}`);
  carImage.addEventListener("click", () => {
    buyBtn.click();
  });
}
