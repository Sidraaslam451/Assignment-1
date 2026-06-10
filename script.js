// ==================== SCROLL REVEAL ====================
const revealEls = document.querySelectorAll(
  ".reveal, .course-card, .about-visual",
);
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  { threshold: 0.12 },
);
revealEls.forEach((el) => observer.observe(el));

// ==================== ACTIVE NAV ====================
const navLinks = document.querySelectorAll(".nav a");
window.addEventListener("scroll", () => {
  const sections = document.querySelectorAll(
    "section[id], header[id], main[id]",
  );
  let current = "";
  sections.forEach((sec) => {
    if (window.scrollY >= sec.offsetTop - 120) current = sec.id;
  });
  navLinks.forEach((a) => {
    a.classList.remove("active");
    if (a.getAttribute("href") === "#" + current) a.classList.add("active");
  });
});
