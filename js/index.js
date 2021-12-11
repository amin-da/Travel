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

// show scroll up button

function scrollUp() {
  const scrollUp = document.getElementById("scroll__up");
  // When the scroll is higher than 200 viewport height, add the show-scroll class to the a tag with the scroll-top class
  if (this.scrollY >= 200) scrollUp.classList.add("show-scroll");
  else scrollUp.classList.remove("show-scroll");
}
window.addEventListener("scroll", scrollUp);

// SCROLL SECTIONS ACTIVE LINK
const sections = document.querySelectorAll("section[id]");

function scrollActive() {
  const scrollY = window.pageYOffset;

  sections.forEach(current => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.add("active-link");
    } else {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.remove("active-link");
    }
  });
}
window.addEventListener("scroll", scrollActive);

/*==================== DARK LIGHT THEME ====================*/

const themeButton = document.getElementById("theme-button");
const darkTheme = "dark-theme";
const iconTheme = "ri-sun-line";

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () =>
  document.body.classList.contains(darkTheme) ? "dark" : "light";
const getCurrentIcon = () =>
  themeButton.classList.contains(iconTheme) ? "ri-moon-line" : "ri-sun-line";

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
    darkTheme
  );
  themeButton.classList[selectedIcon === "ri-moon-line" ? "add" : "remove"](
    iconTheme
  );
}

// button change sound
let btnAudio = new Audio('../assets/sound/3.wav');

// Activate / deactivate the theme manually with the button
themeButton.addEventListener("click", () => {
  // Add or remove the dark / icon theme
  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme);
  // We save the theme and the current icon that the user chose
  localStorage.setItem("selected-theme", getCurrentTheme());
  localStorage.setItem("selected-icon", getCurrentIcon());
  btnAudio.play();

  //change Theme name
  if (document.body.classList.contains(darkTheme)) {
    document.getElementById("theme-name").textContent = "حالت روز";
  } else {
    document.getElementById("theme-name").textContent = "حالت شب";
  }
});

/*==================== SCROLL REVEAL ANIMATION ====================*/
const sr = ScrollReveal({
  distance: "50px",
  duration: 2300
  // reset: true,
});

sr.reveal(
  `.home__data, .home__social-link, .home__info,
           .discover__container,
           
           .experience__data, .experience__overlay,
           .place__card,
           .sponsor__content,
           .footer__data, .footer__rights`,
  {
    origin: "top",
    interval: 110
  }
);

sr.reveal(
  `
          .about__img-overlay, 
           .video__description,
           .subscribe__description`,
  {
    origin: "left"
  }
);

sr.reveal(
  `         .about__data, 
           .video__content,
           .subscribe__form`,
  {
    origin: "right",
    interval: 100
  }
);
