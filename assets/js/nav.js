document.getElementById("navigation-open").addEventListener("click", () => {
  document.getElementById("mobile-nav").classList.add("open");
  document.getElementById("mobile-nav-list").classList =
    "mobile-nav__list u-fade-in-delay";
  document.getElementById("navigation-close").classList =
    "nav-button u-fade-in-delay";
});

document.getElementById("navigation-close").addEventListener("click", () => {
  document.getElementById("mobile-nav").classList.remove("open");
  document.getElementById("mobile-nav-list").classList =
    "mobile-nav__list u-fade-out-delay";
  document.getElementById("navigation-close").classList =
    "nav-button u-fade-out-delay";
});
