 AOS.init();

    const navbar = document.querySelector(".navbar");
    window.addEventListener("scroll", () => {
      if (window.scrollY > 10) {
        navbar.classList.add("scrolled");
      } else {
        navbar.classList.remove("scrolled");
      }
    });

    const burger = document.getElementById("burger");
    const navLinks = document.querySelector(".nav-links");

    burger.addEventListener("click", () => {
      navLinks.classList.toggle("active");
    });

    document.addEventListener('DOMContentLoaded', () => {
  AOS.init({
    duration: 1000,
    once: true
  });
});
