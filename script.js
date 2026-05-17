const menuToggle = document.querySelector(".menu-toggle");
const mobileMenu = document.querySelector(".mobile-menu");
const mobileBackdrop = document.querySelector(".mobile-menu-backdrop");
const mobileLinks = document.querySelectorAll(".mobile-menu a");
const faqQuestions = document.querySelectorAll(".faq-question");

function setMenuState(isOpen) {
  if (!menuToggle || !mobileMenu || !mobileBackdrop) {
    return;
  }

  menuToggle.classList.toggle("is-open", isOpen);
  mobileMenu.classList.toggle("is-open", isOpen);
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  mobileBackdrop.hidden = !isOpen;
  document.body.classList.toggle("menu-open", isOpen);
}

if (menuToggle && mobileMenu && mobileBackdrop) {
  menuToggle.addEventListener("click", () => {
    const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
    setMenuState(!isOpen);
  });

  mobileBackdrop.addEventListener("click", () => setMenuState(false));
  mobileLinks.forEach((link) =>
    link.addEventListener("click", () => setMenuState(false))
  );
}

faqQuestions.forEach((question) => {
  question.addEventListener("click", () => {
    const answer = question.nextElementSibling;
    const isOpen = question.getAttribute("aria-expanded") === "true";

    question.setAttribute("aria-expanded", String(!isOpen));
    if (answer) {
      answer.hidden = isOpen;
    }
  });
});
