// codigo do formulario

const form = document.getElementById("signup-form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
});

// codigo dos accordions

const accordions = document.querySelectorAll(".accordion");
accordions.forEach((accordion) => {
  accordion.addEventListener("click", (e) => {
    const body = accordion.querySelector(".accordion-body");
    body.classList.toggle("active");
  });
});

// codigo da barra de pesquisa

const searchInput = document.getElementById("input-search");
const searchBtn = document.getElementById("btn-search");
const searchResult = document.getElementById("search-result");

searchResult.style.display = "none";

searchBtn.addEventListener("click", () => {
  const searchText = searchInput.value.trim();
  searchResult.style.display = "block";
  if (searchText !== "") {
    searchResult.innerHTML = `Você buscou por: <strong>${searchText}</strong>`;
  } else {
    searchResult.innerHTML = "Por favor, digite algo para buscar.";
  }
});

searchInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    searchBtn.click();
  }
});

// codigo dos sliders

new Swiper(".slide1", {
  loop: true,
  spaceBetween: 21,

  // Pagination bullets
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: ".arrow-right", // → vai pra frente
    prevEl: ".arrow-left", // ← volta
  },

  // Responsive breakpoints
  breakpoints: {
    320: {
      slidesPerView: 2,
      spaceBetween: 185,
    },
    344: {
      slidesPerView: 2,
      spaceBetween: 160,
    },
    375: {
      slidesPerView: 2,
      spaceBetween: 130,
    },
    414: {
      slidesPerView: 2,
      spaceBetween: 100,
    },
    430: {
      slidesPerView: 2,
      spaceBetween: 90,
    },
    500: {
      slidesPerView: 2.5,
      spaceBetween: 120,
    },
    640: {
      slidesPerView: 3,
      spaceBetween: 130,
    },
    800: {
      slidesPerView: 4,
      spaceBetween: 200,
    },
    930: {
      slidesPerView: 4.5,
      spaceBetween: 200,
    },
    1024: {
      slidesPerView: 5,
      spaceBetween: 230,
    },
  },
});
