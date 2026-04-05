// Simple form submission (demo)
document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      alert("Application submitted! We'll contact you soon.");

      form.reset();
    });
  }
});

// Smooth scroll for links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));

    if (target) {
      target.scrollIntoView({
        behavior: "smooth"
      });
    }
  });
});
