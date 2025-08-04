// Dynamic variable that should be retrieved from back-end (for now hardcoded), there will be navbar options
class NavBarItemsMainPage {
  constructor(navItemsTitle, navItemsLinks) {
    this.title = navItemsTitle;
    this.links = navItemsLinks;
  }

  getAllNavItems(...navItems) {
    return navItems;
  }
}

// Creation of items for navBar (for now, in future I will retrieve everything from database)
let firstNavItem = new NavBarItemsMainPage("Characters", [
  "Races",
  "Professions",
  "Lifepaths",
  "Skills",
]);
let secondNavItem = new NavBarItemsMainPage("Bestiary", [
  "Monsters",
  "Beasts",
  "Cursed Ones",
]);
let thirdNavItem = new NavBarItemsMainPage("Equipment", [
  "Weapons",
  "Armor",
  "Alchemical Items",
]);
let fourthNavItem = new NavBarItemsMainPage("Magic", [
  "Spells",
  "Signs",
  "Invocations",
  "Rituals",
]);
let fifthNavItem = new NavBarItemsMainPage("World", [
  "Regions",
  "History",
  "Factions",
]);

const fullNavItemsList = new NavBarItemsMainPage().getAllNavItems(
  firstNavItem,
  secondNavItem,
  thirdNavItem,
  fourthNavItem,
  fifthNavItem
);

const navBarContainer = document.getElementById("navbar")

function renderNavBar() {
    // clearing container
  navBarContainer.innerHTML = "";

  // Main title
  const mainTitle = document.createElement("h1");
  mainTitle.className =
    "text-5xl md:text-6xl font-witcher text-center text-yellow-300 mb-8";
  mainTitle.textContent = "The Witcher Handbook";
  navBarContainer.appendChild(mainTitle);

  // Navigation bar
  const navBar = document.createElement("nav");
  navBar.className = "flex justify-center flex-wrap gap-8 mb-12";

  // Loop through items in navItems and render all groups with items to show in main menu
  fullNavItemsList.forEach((item) => {
    const dropdownDiv = document.createElement("div");
    dropdownDiv.className = "dropdown relative inline-block px-4";

    const button = document.createElement("button");
    button.className =
      "bg-gray-700 hover:bg-gray-600 text-white font-bold py-3 px-10 rounded-lg transition duration-300 ease-in-out";
    button.textContent = item.title;

    const dropdownContent = document.createElement("div");
    dropdownContent.className = "dropdown-content py-2";
    // Loop through items inside of group item and render it for dropdown
    item.links.forEach((linkText) => {
      const link = document.createElement("a");
      link.href = "#"; // Placeholder link
      link.textContent = linkText;
      link.className =
        "block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700";
      dropdownContent.appendChild(link);
    });

    dropdownDiv.appendChild(button);
    dropdownDiv.appendChild(dropdownContent);
    navBar.appendChild(dropdownDiv);
  });

  navBarContainer.appendChild(navBar);
}

// EVENT LISTENERS
function setupEventListeners() {
  // This makes dropdowns work on click for touch devices
  document.querySelectorAll(".dropdown button").forEach((button) => {
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
}

// INITIALIZATION
// This runs when the page loads
document.addEventListener("DOMContentLoaded", () => {
  renderNavBar();
  setupEventListeners();
});