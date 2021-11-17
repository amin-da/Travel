// show header menu
const navMenu = document.getElementById("nav-menu");
const navToggleBtn = document.getElementById("nav-toggle");
const navCloseBtn = document.getElementById("nav-close");

// show menu
if (navToggleBtn) {
  navToggleBtn.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

//hide menu
if (navCloseBtn) {
  navCloseBtn.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

// Remove menu mobile
const navLink = document.querySelectorAll(".nav__link");

function linkAction() {
  const navMenu = document.getElementById("nav-menu");
  // When we click on each nav__link, we remove the show-menu class
  navMenu.classList.remove("show-menu");
}
navLink.forEach(n => n.addEventListener("click", linkAction));

// change header background in scroll
function scrollHeader() {
  const header = document.getElementById("header");
  // When the scroll is greater than 100 viewport height, add the scroll-header class to the header tag
  if (this.scrollY >= 100) {
    header.classList.add("scroll-header");
  } else {
    header.classList.remove("scroll-header");
  }
}
window.addEventListener("scroll", scrollHeader);

// swiper for discover section

let swiper = new Swiper(".discover__container", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  loop: true,
  spaceBetween: 2,
  coverflowEffect: {
    rotate: 40,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true
  }
});

// Video Functionality

const videoFile = document.getElementById("video-file");
const videoButton = document.getElementById("video-button");
const videoIcon = document.getElementById("video-icon");

function playPause() {
  if (videoFile.paused) {
    //play video
    videoFile.play();
    //change icon
    videoIcon.classList.remove("ri-play-line");
    videoIcon.classList.add("ri-pause-line");
  } else if (videoFile.play) {
    //pause video
    videoFile.pause();

    //change icon
    videoIcon.classList.remove("ri-pause-line");
    videoIcon.classList.add("ri-play-line");
  }
}

videoButton.addEventListener("click", playPause);

//when video end change icon
function endVideo() {
  videoIcon.classList.remove("ri-pause-line");
  videoIcon.classList.add("ri-play-line");
}
videoFile.addEventListener("ended", endVideo);
