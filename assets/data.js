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

export const fullGroupCards = new GroupCards().getAllCardItems(
  firstCard,
  secondCard,
  thirdCard,
  fourthCard
);


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
let firstMainCard = new CardsMainMenu(
  "Creating Your First Character",
  "A step-by-step guide to bringing your Witcher world character to life, from choosing a race to defining their skills.",
  "#"
);
let secondMainCard = new CardsMainMenu(
  "The Art of Alchemy",
  "Discover the secrets of crafting powerful potions, oils, and bombs to aid you in your adventures.",
  "#"
);
let thirdMainCard = new CardsMainMenu(
  "Understanding Combat",
  "Learn the core mechanics of combat, from fast and strong strikes to parrying and dodging..",
  "#"
);
let fourthMainCard = new CardsMainMenu(
  "Understanding Combat",
  "Learn the core mechanics of combat, from fast and strong strikes to parrying and dodging..",
  "#"
);
let fifthMainCard = new CardsMainMenu(
  "Understanding Combat",
  "Learn the core mechanics of combat, from fast and strong strikes to parrying and dodging..",
  "#"
);

// Dynamic variable created for showing most popular web pages (cards in main menu)
export const fullMainMenuCards = new CardsMainMenu().getAllCardItems(
  firstMainCard,
  secondMainCard,
  thirdMainCard,
  fourthMainCard,
  fifthMainCard
);

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

export const fullNavItemsList = new NavBarItemsMainPage().getAllNavItems(
  firstNavItem,
  secondNavItem,
  thirdNavItem,
  fourthNavItem,
  fifthNavItem
);

