// Sticky Navigation Menu JS Code
let nav = document.querySelector("nav");
let scrollBtn = document.querySelector(".scroll-button a");
console.log(scrollBtn);
let val;
window.onscroll = function() {
  if(document.documentElement.scrollTop > 20){
    nav.classList.add("sticky");
    scrollBtn.style.display = "block";
  }else{
    nav.classList.remove("sticky");
    scrollBtn.style.display = "none";
  }

}

// Side NavIgation Menu JS Code
let body = document.querySelector("body");
let navBar = document.querySelector(".navbar");
let menuBtn = document.querySelector(".menu-btn");
let cancelBtn = document.querySelector(".cancel-btn");
menuBtn.onclick = function(){
  navBar.classList.add("active");
  menuBtn.style.opacity = "0";
  menuBtn.style.pointerEvents = "none";
  body.style.overflow = "hidden";
  scrollBtn.style.pointerEvents = "none";
}
cancelBtn.onclick = function(){
  navBar.classList.remove("active");
  menuBtn.style.opacity = "1";
  menuBtn.style.pointerEvents = "auto";
  body.style.overflow = "auto";
  scrollBtn.style.pointerEvents = "auto";
}

// Side Navigation Bar Close While We Click On Navigation Links
let navLinks = document.querySelectorAll(".menu li a");
for (var i = 0; i < navLinks.length; i++) {
  navLinks[i].addEventListener("click" , function() {
    navBar.classList.remove("active");
    menuBtn.style.opacity = "1";
    menuBtn.style.pointerEvents = "auto";
  });
}
window.addEventListener("load", () => {
  const preloader = document.getElementById("preloader");
  if (preloader) {
    preloader.style.opacity = "0";
    preloader.style.transition = "opacity 0.2s ease";
    setTimeout(() => {
      preloader.style.display = "none";
    }, 500); // ✅ Fixed: closed properly
  }
});
// ===== GALLERY SLIDER =====

const galleryContainer = document.querySelector(".gallery-container");
const nextBtn = document.querySelector(".next-btn");
const prevBtn = document.querySelector(".prev-btn");

nextBtn.addEventListener("click", () => {
  galleryContainer.scrollBy({
    left: 340,
    behavior: "smooth"
  });
});

prevBtn.addEventListener("click", () => {
  galleryContainer.scrollBy({
    left: -340,
    behavior: "smooth"
  });
});

// Auto Slide

setInterval(() => {

  if(
    galleryContainer.scrollLeft + galleryContainer.clientWidth >=
    galleryContainer.scrollWidth - 10
  ){

    galleryContainer.scrollTo({
      left: 0,
      behavior: "smooth"
    });

  }else{

    galleryContainer.scrollBy({
      left: 340,
      behavior: "smooth"
    });

  }

}, 3500);
// ===== IMAGE POPUP =====

const galleryImages = document.querySelectorAll(".gallery-card img");
const imagePopup = document.querySelector(".image-popup");
const popupImg = document.querySelector(".popup-img");
const closePopup = document.querySelector(".close-popup");

galleryImages.forEach((image) => {

  image.addEventListener("click", () => {

    imagePopup.classList.add("show");

    popupImg.src = image.src;

  });

});

closePopup.addEventListener("click", () => {

  imagePopup.classList.remove("show");

});

imagePopup.addEventListener("click", (e) => {

  if(e.target !== popupImg){
    imagePopup.classList.remove("show");
  }

});