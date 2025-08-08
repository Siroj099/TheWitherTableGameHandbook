import { fullGroupCards } from "./data.js"

const featuredGrid = document.getElementById("featured-grid");
const groupCardTemplate = document.getElementById("card-template");

function renderGroupPage() {
  // clearing container
  featuredGrid.innerHTML = "";

  fullGroupCards.forEach((page) => {
    // Clone the template content for each card
    const cardClone = groupCardTemplate.content.cloneNode(true);
    
    // Get the card and its inner elements within the cloned content
    const cardDiv = cardClone.querySelector(".aspect-\\[1\\.5\\]");
    const cardTitle = cardClone.querySelector("h3");
    const cardDescription = cardClone.querySelector("p");
    const cardLink = cardClone.querySelector("a");

    // Set the content and styles
    cardDiv.style.backgroundImage = `url('${page.imageURL}')`;
    cardDiv.style.backgroundSize = "cover";
    cardDiv.style.backgroundPosition = "center";
    cardDiv.style.backgroundRepeat = "no-repeat";

    // Set text retrieved from Back-end into card content
    cardTitle.textContent = page.title;
    cardDescription.textContent = page.description;
    cardLink.href = page.link;

    // Append the complete card clone to the grid
    featuredGrid.appendChild(cardClone);
  });
}

// INITIALIZATION
// This runs when the page loads
document.addEventListener("DOMContentLoaded", () => {
  renderGroupPage();
  //   setupEventListeners();
});
