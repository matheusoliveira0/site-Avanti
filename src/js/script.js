// codigo da barra de pesquisa

// // meu cod
const searchInput = document.getElementById("input-search");
const searchBtn = document.getElementById("btn-search");
const searchResult = document.getElementById("search-result");

searchResult.style.display = "none";

searchBtn.addEventListener("click", () => {
  const searchText = searchInput.value.trim();
  searchResult.style.display = "block";
  if (searchText !== "") {
    searchResult.innerHTML = `<p>Você buscou por: ${searchText}.</p>`;
  } else {
    searchResult.innerHTML = "Por favor, digite algo para buscar.";
  }
});

searchInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    searchBtn.click();
  }
});

// codigo dos accordions

const accordions = document.querySelectorAll(".accordion");

accordions.forEach((accordion) => {
  accordion.addEventListener("click", () => {
    const body = accordion.querySelector(".accordion-body");
    body.classList.toggle("active");
  });
});
