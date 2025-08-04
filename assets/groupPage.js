// Class to dynamically retrieve data for cards
class GroupCards {
  constructor(cardTitle, cardDescription, cardLink, cardImageURL) {
    this.title = cardTitle;
    this.description = cardDescription;
    this.link = cardLink;
    this.imageURL = cardImageURL;
  }
  getAllCardItems(...cardItems) {
    return cardItems;
  }
}

// Created static variables for now
let firstCard = new GroupCards(
  "Люди",
  "Доминирующая раса.",
  "#",
  "../images/bg-humans.webp"
);
let secondCard = new GroupCards(
  "Гномы",
  "Низкорослые.",
  "#",
  "../images/bg-dwarfs.webp"
);
let thirdCard = new GroupCards(
  "Низушки",
  "Очень редкая раса, которую почти истребили.",
  "#",
  "../images/bg-nizushki.webp"
);
let fourthCard = new GroupCards(
  "Эльфы",
  "Старейшая раса жившая на этих землях, до прихода людей являлись владельцами обширных территорий, но из за сложной долголетия и сложной репродуктивной системы стали избегать людей и большинство ушло на восток.",
  "#",
  "../images/bg-elfs.webp"
);

let fullGroupCards = new GroupCards().getAllCardItems(
  firstCard,
  secondCard,
  thirdCard,
  fourthCard
);

const groupPageContainer = document.getElementById("group-page");

function renderGroupPage() {
  // clearing container
  groupPageContainer.innerHTML = "";

  // Dynamic creation of popular cards with small data inside of them
  const featuredSectionTitle = document.createElement("h2");
  featuredSectionTitle.className =
    "text-3xl font-bold text-center text-yellow-200 mb-6";
  featuredSectionTitle.textContent = "Races in Witcher";
  groupPageContainer.appendChild(featuredSectionTitle);

  const featuredGrid = document.createElement("div");
  featuredGrid.className =
    "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8";

  fullGroupCards.forEach((page) => {
    const card = document.createElement("div");
    card.className =
      "aspect-[1.5] rounded-lg shadow-lg p-6 flex flex-col relative overflow-hidden hover:shadow-yellow-300/20 transition duration-300";

    card.style.backgroundImage = `url('${page.imageURL}')`;
    card.style.backgroundSize = "cover";
    card.style.backgroundPosition = "center";
    card.style.backgroundRepeat = "no-repeat";


    // const contentWrapper = document.createElement("div");
    // contentWrapper.className = "";

    const textBackground = document.createElement("div");
    textBackground.className = "bg-gray-900 bg-opacity-80 rounded-md p-4 flex-grow max-h-[250px] relative z-10 flex flex-col h-full";
    
    const cardTitle = document.createElement("h3");
    cardTitle.className = "text-xl font-bold text-yellow-300 mb-2";
    cardTitle.textContent = page.title;

    const cardDescription = document.createElement("p");
    cardDescription.className = "text-gray-200 mb-4";
    cardDescription.textContent = page.description;

    // Append title and description to the text background
    textBackground.appendChild(cardTitle);
    textBackground.appendChild(cardDescription);

    const cardLink = document.createElement("a");
    cardLink.href = page.link;
    cardLink.className = "mt-4 self-start bg-yellow-600 hover:bg-yellow-500 text-gray-900 font-bold py-2 px-4 rounded transition duration-300";
    cardLink.textContent = "Read More";

    card.appendChild(textBackground);
    card.appendChild(cardLink);
    
    // card.appendChild(contentWrapper);
    featuredGrid.appendChild(card);
  });

  groupPageContainer.appendChild(featuredGrid);
}

// INITIALIZATION
// This runs when the page loads
document.addEventListener("DOMContentLoaded", () => {
  renderGroupPage();
  //   setupEventListeners();
});
