
// *************************************************************************
// HOME SCRIPT 
// ***************************************************************************
function openLightbox(element) {
    const lightbox = document.getElementById('lightbox');
    const lightboxImage = document.getElementById('lightbox-image');

    lightbox.style.display = 'flex';
    lightboxImage.src = element.src;
}

function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    lightbox.style.display = 'none';
}

// PROMO BANNER ON THE PAGE PAGE IN GET A QUOTE SLIDES IN FROM TOP 

document.addEventListener("DOMContentLoaded", function () {
    const image = document.querySelector(".promo-banner");

    function handleScroll() {
        const imageRect = image.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        // Check if the image is in the viewport
        if (imageRect.top < windowHeight && imageRect.bottom > 0) {
            image.classList.add("visible");
        } 
        // Remove 'visible' class only when the image is completely out of view
        else if (imageRect.bottom <= 0 || imageRect.top >= windowHeight) {
            image.classList.remove("visible");
        }
    }

    window.addEventListener("scroll", handleScroll);
});


// ***********************************************************************
// ABOUT SCRIPT 
// ************************************************************************
// THE TEAM PROFILE IN THE ABOUT SECTION PICTURES SLIDES IN 
document.addEventListener("DOMContentLoaded", function () {
    const profiles = document.querySelectorAll(".team-profile");

    function handleScroll() {
        profiles.forEach((profile, index) => {
            const rect = profile.getBoundingClientRect();
            const windowHeight = window.innerHeight;

            if (rect.top < windowHeight && rect.bottom >= 0) {
                setTimeout(() => {
                    profile.classList.add("visible");
                }, index * 150); // Stagger effect by 150ms for each profile
            } else if (rect.top > windowHeight || rect.bottom < 0) {
             profile.classList.remove("visible"); // Remove visible class if scrolled out
            }
        });
    }

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Run once on load in case items are already in view
});


// **********************************************************************************
// SERVICE SCRIPT 
// ************************************************************************
// IMAGE ON THE SERVICE PAGE IN GET A QUOTE SLIDES IN ON SCROLL 

document.addEventListener("DOMContentLoaded", function () {
    const image = document.querySelector(".slide-in-image");

    function handleScroll() {
        const imageRect = image.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        // Check if the image is in the viewport
        if (imageRect.top < windowHeight && imageRect.bottom > 0) {
            image.classList.add("visible");
        } 
        // Remove 'visible' class only when the image is completely out of view
        else if (imageRect.bottom <= 0 || imageRect.top >= windowHeight) {
            image.classList.remove("visible");
        }
    }

    window.addEventListener("scroll", handleScroll);
});

// *******************************************************************
// JavaScript to handle card flip on "See Details" and "Back" button clicks
function flipCard(event) {
    const card = event.target.closest('.menu-card');
    card.classList.add('flip');
  }
  
  function flipBack(event) {
    const card = event.target.closest('.menu-card');
    card.classList.remove('flip');
  }



  // SCRIPT FOR THE STEPS TO WORK WITH US
const targets = document.querySelectorAll(".timeline ol li");
const threshold = 0.5;
const ANIMATED_CLASS = "in-view";

function callback(entries) {
  entries.forEach((entry) => {
    const elem = entry.target;
    if (entry.intersectionRatio >= threshold) {
      elem.classList.add(ANIMATED_CLASS);
      stepsObserver.unobserve(elem);
    } else {
      elem.classList.remove(ANIMATED_CLASS);
    }
  });
}

// Use a unique name for the observer to avoid conflicts
const stepsObserver = new IntersectionObserver(callback, { threshold });

targets.forEach((target) => {
  stepsObserver.observe(target);
});
 
// &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
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
