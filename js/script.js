const btn = document.getElementById("show-btn");
const system = document.querySelector(".solar-system");
const img = document.querySelector(".center-img");
const speech = document.querySelector(".speech");

btn.addEventListener("click", () => {
  system.classList.add("active");
  btn.style.display = "none";
  speech.textContent = "Лови вариантики";
  speech.style.margin = 0;
  img.src = "img/catch_pic.png";
});
