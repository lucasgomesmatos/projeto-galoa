import MenuActive from "./modules/MenuActive.js";
import MenuActiveLink from "./modules/MenuActiveLink.js";
import ActiveTextAbstract from "./modules/ActiveTextAbstract.js";
import AddDiscussions from "./modules/AddDiscussions.js";
import ResponseForUser from "./modules/ResponseForUser.js";

new MenuActive(".side-menu-responsive .name-event");
new MenuActiveLink("#menu-list .link-menu", "#menu-list-responsive .link-menu");
new ActiveTextAbstract(".show-abstract-text", ".abstract-text .show-text");
new AddDiscussions(
  ".button-add",
  ".discussions-container-form",
  ".discussions-container",
  ".icon-buttons-rigth",
  ".discussions-container-form",
  ".discussions-container-add-topic",
  ".discussions-cards-container .card-sucess"
);
new ResponseForUser(".active-reponse", ".card-reponse-autor")
