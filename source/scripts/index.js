document.addEventListener("DOMContentLoaded", function () {
  const burger = document.querySelector(".nav__burger");
  const navList = document.querySelector(".nav__list");

  navList.classList.remove("nav__list--no-js");
  burger.classList.remove("nav__burger--no-js");

  burger.addEventListener("click", function () {
    navList.classList.toggle("nav__list--active");
    burger.classList.toggle("nav__burger--active");
  });

  document.addEventListener("click", function (event) {
    if (
      !event.target.closest(".nav__list") &&
      !event.target.closest(".nav__burger")
    ) {
      navList.classList.remove("nav__list--active");
      burger.classList.remove("nav__burger--active");
    }
  });

  document.querySelectorAll(".nav__link").forEach((link) => {
    link.addEventListener("click", function () {
      navList.classList.remove("nav__list--active");
      burger.classList.remove("nav__burger--active");
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const rangeInput = document.querySelector(".order__range");
  const progressValue = document.querySelector(".order__progress");

  // Обновляем значение при изменении положения ползунка
  rangeInput.addEventListener("input", function () {
    progressValue.textContent = `${this.value}%`;
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const select = document.querySelector(".order__select-custom");
  const selected = document.querySelector(".order__select-selected");
  const options = document.querySelector(".order__select-options");
  const input = document.querySelector("#system_type");

  select.addEventListener("click", function () {
    const isOpen = options.style.display === "block";
    options.style.display = isOpen ? "none" : "block";
    select.classList.toggle("open", !isOpen); // Добавляем класс open
  });

  document.querySelectorAll(".order__select-options li").forEach((option) => {
    option.addEventListener("click", function () {
      selected.textContent = this.textContent;
      input.value = this.getAttribute("data-value");
      options.style.display = "none";
      select.classList.remove("open"); // Убираем класс open
    });
  });

  document.addEventListener("click", function (event) {
    if (!select.contains(event.target)) {
      options.style.display = "none";
      select.classList.remove("open");
    }
  });
});



