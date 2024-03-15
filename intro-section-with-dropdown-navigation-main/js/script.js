document.addEventListener("DOMContentLoaded", function () {
  // Select elements
  const navbar = document.querySelector(".navbar");
  const menuBtn = document.querySelector(".menu-btn");
  const menuBtnBurger = document.querySelector(".menu-btn__burger");
  const navLink = document.querySelectorAll(".navbar > li > a");
  const dropdowns = document.querySelectorAll(".dropdown-content");
  const arrows = document.querySelectorAll(".arrow");

  // Handle menu button click
  menuBtn.addEventListener("click", function () {
    if (window.getComputedStyle(navbar).display === "none") {
      navbar.style.display = "flex";
      menuBtn.classList.toggle("menu-btn__fixed");
      menuBtnBurger.classList.toggle("open");
    } else {
      navbar.style.display = "";
      menuBtn.classList.toggle("menu-btn__fixed");
      menuBtnBurger.classList.toggle("open");
    }
  });

  // Handle dropdown link clicks
  function refreshMenu(i) {
    if (i === 0 && dropdowns[1].classList.contains("show")) {
      dropdowns[1].classList.toggle("show");
      arrows[1].style.transform = "rotate(0)";
    }
    if (i === 1 && dropdowns[0].classList.contains("show")) {
      dropdowns[0].classList.toggle("show");
      arrows[0].style.transform = "rotate(0)";
    }

    dropdowns[i].classList.toggle("show");

    if (dropdowns[i].classList.contains("show"))
      arrows[i].style.transform = "rotate(540deg)";
    else arrows[i].style.transform = "rotate(0deg)";
  }

  // Attach click handlers to dropdown links
  navLink.forEach(function (link, index) {
    if (index <= 1) {
      link.addEventListener("click", function (e) {
        e.preventDefault();
        refreshMenu(index);
      });
      dropdowns[index].addEventListener("mouseleave", function (e) {
        dropdowns[index].classList.remove("show");
        arrows[index].style.transform = "rotate(0)";
      });
    }
  });
});
