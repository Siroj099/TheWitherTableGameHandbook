import { fullNavItemsList } from "./data.js";

const navBarContainer = document.getElementById("navbar");
const navBarTemplate = document.getElementById("nav-dropdown-template");

function renderNavBar() {
  // clearing container
  navBarContainer.innerHTML = "";

  // Navigation bar container
  const navBar = document.createElement("nav");
  navBar.className = "flex justify-center flex-wrap gap-8 mb-12";

  // Loop through items in navItems and render all groups with items to show in main menu
  fullNavItemsList.forEach((item) => {
    // cloning template
    const dropdownDiv =
      navBarTemplate.content.cloneNode(true).firstElementChild;

    // getting elements inside of template and update content inside of it
    const button = dropdownDiv.querySelector("button");
    button.textContent = item.title;

    const dropdownContent = dropdownDiv.querySelector(".dropdown-content");

    // populate content of items inside of dropdown
    item.links.forEach((linkText) => {
      const link = document.createElement("a");
      link.href = "#"; // Placeholder link
      link.textContent = linkText;
      link.className =
        "block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700";
      dropdownContent.appendChild(link);
    });

    navBar.appendChild(dropdownDiv);
  });

  navBarContainer.appendChild(navBar);
}

// EVENT LISTENERS
function setupEventListeners() {
  // This makes dropdowns work on click for touch devices
  document.querySelectorAll("button").forEach((button) => {
    button.addEventListener("click", (event) => {
      // Prevent the click from bubbling up to the window
      event.stopPropagation();

      const parentDropdown = button.parentElement;

      // Close other dropdowns
      document
        .querySelectorAll(".dropdown.active")
        .forEach((activeDropdown) => {
          if (activeDropdown !== parentDropdown) {
            activeDropdown.classList.remove("active");
          }
        });

      // Toggle the current one
      parentDropdown.classList.toggle("active");
    });
  });

  // Close dropdowns if clicking outside
  window.addEventListener("click", () => {
    document.querySelectorAll(".dropdown.active").forEach((dropdown) => {
      dropdown.classList.remove("active");
    });
  });
  document.querySelectorAll(".dropdown").forEach((dropdown) => {
    // Add hovered class when the mouse enters the dropdown area
    dropdown.addEventListener("mouseenter", () => {
      dropdown.classList.add("hovered");
    });

    // Remove hovered class when the mouse leaves the dropdown area
    dropdown.addEventListener("mouseleave", () => {
      dropdown.classList.remove("hovered");
    });
  });
}

// INITIALIZATION
// This runs when the page loads
document.addEventListener("DOMContentLoaded", () => {
  renderNavBar();
  setupEventListeners();
});
