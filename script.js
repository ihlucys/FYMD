const slider = document.querySelector(".slider");
const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");

// Atualiza bolinha ao arrastar
slider.addEventListener("scroll", () => {
  const slideWidth = slider.offsetWidth;
  const index = Math.round(slider.scrollLeft / slideWidth);

  dots.forEach(dot => dot.classList.remove("active"));
  if (dots[index]) dots[index].classList.add("active");
});

// Clicar na bolinha muda o slide
dots.forEach((dot, i) => {
  dot.addEventListener("click", () => {
    slider.scrollTo({
      left: slider.offsetWidth * i,
      behavior: "smooth"
    });
  });
});
