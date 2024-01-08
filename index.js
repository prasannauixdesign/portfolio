let cursor = document.querySelector(".cursor");
let cursorScale = document.querySelectorAll(".cursor-scale"),
  mouseX = 0,
  mouseY = 0;

gsap.to({}, 0.016, {
  repeat: -1,
  onRepeat: function () {
    gsap.set(cursor, {
      css: {
        left: mouseX,
        top: mouseY,
      },
    });
  },
});

window.addEventListener("mousemove", function (e) {
  mouseX = e.clientX;
  mouseY = e.clientY;
});
/* CUROSR ANIMATION DISABLE */

document.addEventListener("DOMContentLoaded", function () {
  var exampleElement = document.getElementById("disable-cursor");

  // Remove cursor animation styles
  exampleElement.style.cursor = "auto"; // or 'default' to reset to the default cursor

  // Add other modifications as needed
});
// Smooth scrolling when clicking on links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

//animation on scroll
document.addEventListener("DOMContentLoaded", function () {
  const animatedSections = document.querySelectorAll(".animated-section");

  const observer = new IntersectionObserver(
    function (entries, observer) {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.5 }
  );

  animatedSections.forEach((section) => {
    observer.observe(section);
  });
});

//social icons
document.addEventListener("DOMContentLoaded", function () {
  var socialIcons = document.querySelector(".social-connect");
  var sections = document.querySelectorAll("section");

  window.addEventListener("scroll", function () {
    var disableIconsAfterSections = 5;

    if (window.scrollY > sections[disableIconsAfterSections - 1].offsetTop) {
      socialIcons.style.display = "none";
    } else {
      socialIcons.style.display = "block";
    }
  });
});

/* //Dark Mode
const body = document.body;
  const toggleText = document.getElementById('toggleText');

  function toggleDarkMode() {
    body.classList.toggle('dark-mode');
    const isDarkMode = body.classList.contains('dark-mode');
    toggleText.textContent = isDarkMode ? 'off' : 'on';
  } */
/* LIGHTBOX  */
