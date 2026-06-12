document.addEventListener("DOMContentLoaded", () => {
  const menuButton = document.getElementById("menuButton");
  const navLinks = document.getElementById("navLinks");

  if (menuButton && navLinks) {
    menuButton.addEventListener("click", () => {
      navLinks.classList.toggle("open");
    });

    document.querySelectorAll(".nav-links a").forEach((link) => {
      link.addEventListener("click", () => {
        navLinks.classList.remove("open");
      });
    });
  }

  const profileButtons = document.querySelectorAll(".nav-profile-button");
  const profileContents = document.querySelectorAll(".profile-content");
  const heroProfiles = document.querySelectorAll(".hero-profile");

  profileButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const selectedProfile = button.dataset.profile;

      profileButtons.forEach((item) => {
        item.classList.remove("active");
      });

      profileContents.forEach((content) => {
        content.classList.remove("active");
      });

      heroProfiles.forEach((hero) => {
        hero.classList.remove("active");
      });

      button.classList.add("active");

      const activeContent = document.querySelector(
        `[data-profile-content="${selectedProfile}"]`
      );

      const activeHero = document.querySelector(
        `[data-hero-profile="${selectedProfile}"]`
      );

      if (activeContent) {
        activeContent.classList.add("active");
      }

      if (activeHero) {
        activeHero.classList.add("active");
      }

      if (navLinks) {
        navLinks.classList.remove("open");
      }

      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    });
  });
});
