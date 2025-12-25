const slider = document.querySelector(".slider");
const slides = document.querySelectorAll(".slide");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");

let index = 0;

function atualizarSlider() {
  slider.style.transform = `translateX(-${index * 100}%)`;
}

next.addEventListener("click", () => {
  index++;
  if (index >= slides.length) index = 0;
  atualizarSlider();
});

prev.addEventListener("click", () => {
  index--;
  if (index < 0) index = slides.length - 1;
  atualizarSlider();
});
