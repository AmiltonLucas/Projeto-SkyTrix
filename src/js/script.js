document.addEventListener("DOMContentLoaded", function () {
  const offcanvasNavbar = document.getElementById("offcanvasNavbar");
  const navLinks = offcanvasNavbar.querySelectorAll(".nav-link");

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      const offcanvas = bootstrap.Offcanvas.getInstance(offcanvasNavbar);
      offcanvas.hide();
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const navbarNav = document.getElementById("navbarNav");
  const navLinks = navbarNav.querySelectorAll(".nav-link");
  const navbarToggler = document.querySelector(".navbar-toggler");

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      // Verifica se o menu colapsável está visível (aberto)
      if (navbarToggler.getAttribute("aria-expanded") === "true") {
        const collapseElement = new bootstrap.Collapse(navbarNav);
        collapseElement.hide();
      }
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  // Seção Nacional
  const prevButtonNacionais = document.querySelector(".prev");
  const nextButtonNacionais = document.querySelector(".next");
  const containerNacionais = document.querySelector(
    "#Nacionais .cardsOurServices"
  );

  prevButtonNacionais.addEventListener("click", function () {
    containerNacionais.scrollBy({
      left: -containerNacionais.clientWidth,
      behavior: "smooth",
    });
  });

  nextButtonNacionais.addEventListener("click", function () {
    containerNacionais.scrollBy({
      left: containerNacionais.clientWidth,
      behavior: "smooth",
    });
  });

  // Seção Internacional
  const prevButtonInternacionais = document.querySelector(
    ".prev-internacionais"
  );
  const nextButtonInternacionais = document.querySelector(
    ".next-internacionais"
  );
  const containerInternacionais = document.querySelector(
    "#Internacionais .cardsOurServices"
  );

  prevButtonInternacionais.addEventListener("click", function () {
    containerInternacionais.scrollBy({
      left: -containerInternacionais.clientWidth,
      behavior: "smooth",
    });
  });

  nextButtonInternacionais.addEventListener("click", function () {
    containerInternacionais.scrollBy({
      left: containerInternacionais.clientWidth,
      behavior: "smooth",
    });
  });

  // Seção Kit Viagem
  const prevButtonKit = document.querySelector(".prev-kit");
  const nextButtonKit = document.querySelector(".next-kit");
  const containerKit = document.querySelector("#Kit .cardsOurServices");

  prevButtonKit.addEventListener("click", function () {
    containerKit.scrollBy({
      left: -containerKit.clientWidth,
      behavior: "smooth",
    });
  });

  nextButtonKit.addEventListener("click", function () {
    containerKit.scrollBy({
      left: containerKit.clientWidth,
      behavior: "smooth",
    });
  });
});
