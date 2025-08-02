// Dynamic variable that should be retrieved from back-end (for now hardcoded), there will be navbar options
class navItemsMainPage {
  constructor(navItemsTitle, navItemsLinks) {
    this.title = navItemsTitle;
    this.links = navItemsLinks;
  }

  getAllNavItems(...navItems) {
    return navItems;
  }
}

// Creation of items for navBar (for now, in future I will retrieve everything from database)
let firstNavItem = new navItemsMainPage("Characters", [
  "Races",
  "Professions",
  "Lifepaths",
  "Skills",
]);
let secondNavItem = new navItemsMainPage("Bestiary", [
  "Monsters",
  "Beasts",
  "Cursed Ones",
]);
let thirdNavItem = new navItemsMainPage("Equipment", [
  "Weapons",
  "Armor",
  "Alchemical Items",
]);
let fourthNavItem = new navItemsMainPage("Magic", [
  "Spells",
  "Signs",
  "Invocations",
  "Rituals",
]);
let fifthNavItem = new navItemsMainPage("World", [
  "Regions",
  "History",
  "Factions",
]);

const fullNavItemsList = new navItemsMainPage().getAllNavItems(
  firstNavItem,
  secondNavItem,
  thirdNavItem,
  fourthNavItem,
  fifthNavItem
);

// Dynamic variable created for showing most popular web pages (cards in main menu)
const featuredPages = [
  {
    title: "Creating Your First Character",
    description:
      "A step-by-step guide to bringing your Witcher world character to life, from choosing a race to defining their skills.",
    link: "#",
  },
  {
    title: "The Art of Alchemy",
    description:
      "Discover the secrets of crafting powerful potions, oils, and bombs to aid you in your adventures.",
    link: "#",
  },
  {
    title: "Understanding Combat",
    description:
      "Learn the core mechanics of combat, from fast and strong strikes to parrying and dodging.",
    link: "#",
  },
];

// Getting the main container (could be devided in future into modules (if there will be new features))
const appContainer = document.getElementById("app");

// Dynamic HTML generation done by javascript

function renderApp() {
  // clearing container
  appContainer.innerHTML = "";

  // Main title
  const mainTitle = document.createElement("h1");
  mainTitle.className =
    "text-5xl md:text-6xl font-witcher text-center text-yellow-300 mb-8";
  mainTitle.textContent = "The Witcher Handbook";
  appContainer.appendChild(mainTitle);

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

  appContainer.appendChild(navBar);

  // Dynamic creation of popular cards with small data inside of them
  const featuredSectionTitle = document.createElement("h2");
  featuredSectionTitle.className =
    "text-3xl font-bold text-center text-yellow-200 mb-6";
  featuredSectionTitle.textContent = "Featured Pages";
  appContainer.appendChild(featuredSectionTitle);

  const featuredGrid = document.createElement("div");
  featuredGrid.className =
    "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8";

  featuredPages.forEach((page) => {
    const card = document.createElement("div");
    card.className =
      "bg-gray-800 rounded-lg shadow-lg p-6 flex flex-col hover:shadow-yellow-300/20 transition duration-300";

    const cardTitle = document.createElement("h3");
    cardTitle.className = "text-xl font-bold text-yellow-300 mb-2";
    cardTitle.textContent = page.title;

    const cardDescription = document.createElement("p");
    cardDescription.className = "text-gray-400 flex-grow mb-4";
    cardDescription.textContent = page.description;

    const cardLink = document.createElement("a");
    cardLink.href = page.link;
    cardLink.className =
      "mt-auto self-start bg-yellow-600 hover:bg-yellow-500 text-gray-900 font-bold py-2 px-4 rounded transition duration-300";
    cardLink.textContent = "Read More";

    card.appendChild(cardTitle);
    card.appendChild(cardDescription);
    card.appendChild(cardLink);
    featuredGrid.appendChild(card);
  });

  appContainer.appendChild(featuredGrid);
}

// EVENT LISTENERS
function setupEventListeners() {
  // This makes dropdowns work on click for touch devices
  // I also want to add logic when 1st tap opens dropdown (on dropdown button) and second tap redirects to the page with selected navbar option (group of items)
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
  renderApp();
  setupEventListeners();
});
