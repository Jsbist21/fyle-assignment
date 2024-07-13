console.log("Hello");

let slideIndex = 0;
const slidesContainer = document.querySelector(".slides");
const dots = document.querySelectorAll(".dot");
const slideElements = Array.from(document.querySelectorAll(".slide"));
const totalSlides = slideElements.length;

for (let i = 0; i < totalSlides; i++) {
  const clone = slideElements[i].cloneNode(true);
  slidesContainer.appendChild(clone);
}

const allSlides = document.querySelectorAll(".slide");

function showSlide(index) {
  slideIndex = index % totalSlides;

  const slideWidth = allSlides[0].clientWidth;
  slidesContainer.style.transform = `translateX(${-slideWidth * slideIndex}px)`;

  dots.forEach((dot) => dot.classList.remove("active"));
  dots[slideIndex % dots.length].classList.add("active");
}

dots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    showSlide(index);
  });
});

setInterval(() => {
  slideIndex++;
  showSlide(slideIndex);
}, 5000);

showSlide(slideIndex);

// project section js

document.addEventListener("DOMContentLoaded", () => {
  const projectContents = document.querySelectorAll(".project-content");
  const projectImage = document.getElementById("project-image");
  let currentIndex = 0;
  const intervalTime = 3000;

  const changeImage = () => {
    const content = projectContents[currentIndex];
    const newImage = content.getAttribute("data-image");
    projectImage.src = newImage;
    projectContents.forEach((content) => content.classList.remove("active"));
    content.classList.add("active");

    currentIndex = (currentIndex + 1) % projectContents.length;
  };

  changeImage();

  const interval = setInterval(changeImage, intervalTime);

  projectContents.forEach((content, index) => {
    content.addEventListener("click", () => {
      clearInterval(interval);
      currentIndex = index;
      changeImage();

      setTimeout(() => {
        interval = setInterval(changeImage, intervalTime);
      }, intervalTime);
    });
  });
});

// form popup

document.addEventListener("DOMContentLoaded", () => {
  const openPopupButton = document.getElementById("open-popup");
  const popupForm = document.getElementById("popup-form");
  const closePopupButton = document.getElementById("close-popup");

  openPopupButton.addEventListener("click", () => {
    popupForm.style.display = "flex";
  });

  closePopupButton.addEventListener("click", () => {
    popupForm.style.display = "none";
  });

  window.addEventListener("click", (event) => {
    if (event.target == popupForm) {
      popupForm.style.display = "none";
    }
  });
});
