const searchInput = document.querySelector("#src");
const carsList = document.querySelectorAll(".carItem");

searchInput.addEventListener("input", () => {
  const searchTerm = searchInput.value.toLowerCase().trim();

  carsList.forEach((car) => {
    const title = car.querySelector("h3").textContent.toLowerCase();
    const shouldShow = title.includes(searchTerm) || searchTerm.length === 0;
    car.classList.toggle("hidden", !shouldShow);
  });
});
