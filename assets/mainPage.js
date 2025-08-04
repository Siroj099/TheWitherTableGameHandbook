// Class to dynamically retrieve data for cards
class CardsMainMenu {
  constructor(cardTitle, cardDescription, cardLink) {
    this.title = cardTitle;
    this.description = cardDescription;
    this.link = cardLink;
  }
  getAllCardItems(...cardItems) {
    return cardItems;
  }
}

// Created static variables for now 
let firstCard = new CardsMainMenu(
  "Creating Your First Character",
  "A step-by-step guide to bringing your Witcher world character to life, from choosing a race to defining their skills.",
  "#"
);
let secondCard = new CardsMainMenu(
  "The Art of Alchemy",
  "Discover the secrets of crafting powerful potions, oils, and bombs to aid you in your adventures.",
  "#"
);
let thirdCard = new CardsMainMenu(
  "Understanding Combat",
  "Learn the core mechanics of combat, from fast and strong strikes to parrying and dodging..",
  "#"
);
let fourthCard = new CardsMainMenu(
  "Understanding Combat",
  "Learn the core mechanics of combat, from fast and strong strikes to parrying and dodging..",
  "#"
);
let fifthCard = new CardsMainMenu(
  "Understanding Combat",
  "Learn the core mechanics of combat, from fast and strong strikes to parrying and dodging..",
  "#"
);

// Dynamic variable created for showing most popular web pages (cards in main menu)
const fullMainMenuCards = new CardsMainMenu().getAllCardItems(
  firstCard,
  secondCard,
  thirdCard,
  fourthCard,
  fifthCard
);


// Getting the main container (could be devided in future into modules (if there will be new features))
const appContainer = document.getElementById("main-page");

// Dynamic HTML generation done by javascript
function renderMainPage() {
  // clearing container
  appContainer.innerHTML = "";

  // Dynamic creation of popular cards with small data inside of them
  const featuredSectionTitle = document.createElement("h2");
  featuredSectionTitle.className =
    "text-3xl font-bold text-center text-yellow-200 mb-6";
  featuredSectionTitle.textContent = "Featured Pages";
  appContainer.appendChild(featuredSectionTitle);

  const featuredGrid = document.createElement("div");
  featuredGrid.className =
    "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8";

  fullMainMenuCards.forEach((page) => {
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

// INITIALIZATION
// This runs when the page loads
document.addEventListener("DOMContentLoaded", () => {
  renderMainPage();
});
