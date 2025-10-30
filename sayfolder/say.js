
// TESTIMONIAL ON HOMEPAGE 
// Carousel Logic
const cards = document.querySelectorAll(".testimonial-card");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
const dotsContainer = document.querySelector(".dots");

let current = 0;

// Create dots dynamically
cards.forEach((_, index) => {
  const dot = document.createElement("span");
  if (index === 0) dot.classList.add("active");
  dotsContainer.appendChild(dot);
});

const dots = dotsContainer.querySelectorAll("span");

function showSlide(index) {
  cards.forEach(card => card.classList.remove("active"));
  dots.forEach(dot => dot.classList.remove("active"));

  cards[index].classList.add("active");
  dots[index].classList.add("active");
  current = index;
}

prevBtn.addEventListener("click", () => {
  let index = current - 1;
  if (index < 0) index = cards.length - 1;
  showSlide(index);
});

nextBtn.addEventListener("click", () => {
  let index = current + 1;
  if (index >= cards.length) index = 0;
  showSlide(index);
});

dots.forEach((dot, index) => {
  dot.addEventListener("click", () => showSlide(index));
});

// Auto-slide
setInterval(() => {
  let index = current + 1;
  if (index >= cards.length) index = 0;
  showSlide(index);
}, 6000);
