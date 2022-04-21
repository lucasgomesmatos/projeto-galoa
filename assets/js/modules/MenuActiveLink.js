export default class MenuActiveLink {
  constructor(classSelector, classSelectorResponsive) {
    this.selector = document.querySelectorAll(`${classSelector}`);
    this.selectorResponsive = document.querySelectorAll(
      `${classSelectorResponsive}`
    );
    this.responsiveMenu(this.selector);
    this.responsiveMenuResponsive(this.selectorResponsive);
  }

  responsiveMenu(selector) {
    selector[0].classList.add("active");

    function removeLink(e) {
      e.preventDefault();
      selector.forEach((item) => {
        item.classList.remove("active");
      });
      e.currentTarget.classList.add("active");
    }

    selector.forEach((item) => {
      item.addEventListener("click", removeLink);
    });
  }
  responsiveMenuResponsive(selector) {
    selector[0].classList.add("active");

    function removeLink(e) {
      e.preventDefault();
      selector.forEach((item) => {
        item.classList.remove("active");
      });
      e.currentTarget.classList.add("active");
    }

    selector.forEach((item) => {
      item.addEventListener("click", removeLink);
    });
  }
}
