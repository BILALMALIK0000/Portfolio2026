// PAGE LOAD ANIMATION + INIT EVERYTHING AFTER LOAD
window.addEventListener("load", () => {

  // PAGE LOAD ANIMATION
  document.body.classList.add("loaded");

  // AOS INIT
  AOS.init({
    duration: 1000,
    once: true
  });

  // TYPING EFFECT (START AFTER LOAD)
  new Typed(".typing", {
    strings: [
      "Web Developer",
      "Frontend Developer",
      "Backend Developer",
      "UI/UX Designer"
    ],
    typeSpeed: 80,
    backSpeed: 50,
    loop: true
  });

  // COUNTER ANIMATION
  const counters = document.querySelectorAll(".counter");

  counters.forEach(counter => {
    counter.innerText = "0";

    const updateCounter = () => {
      const target = +counter.getAttribute("data-target");
      const current = +counter.innerText;

      const increment = target / 100;

      if (current < target) {
        counter.innerText = Math.ceil(current + increment);
        setTimeout(updateCounter, 20);
      } else {
        counter.innerText = target;
      }
    };

    updateCounter();
  });

});

// MOBILE MENU
const menuBtn = document.querySelector(".menu-btn");
const navbar = document.querySelector(".navbar");

menuBtn.addEventListener("click", () => {
  navbar.classList.toggle("active");
});

// CLOSE MENU ON CLICK
document.querySelectorAll(".navbar a").forEach(link => {
  link.addEventListener("click", () => {
    navbar.classList.remove("active");
  });
});