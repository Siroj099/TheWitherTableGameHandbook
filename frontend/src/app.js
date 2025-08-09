import { renderNavBar } from './App/navbar.js';
import { setupEventListeners } from './App/navbar.js';

// INITIALIZATION
// This runs when the page loads
document.addEventListener("DOMContentLoaded", () => {
  renderNavBar();
  setupEventListeners();
});
