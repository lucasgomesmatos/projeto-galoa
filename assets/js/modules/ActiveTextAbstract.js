export default class ActiveTextAbstract {
  constructor(classSelector, classSelectorActive) {
    this.selector = document.querySelector(`${classSelector}`);
    this.selectorActive = document.querySelector(`${classSelectorActive}`);
    this.activeText(this.selector, this.selectorActive)
  }

  activeText(selector, selectorActive) {
    selector.addEventListener("click", () => {
      selector.remove();
      selectorActive.classList.add("active");
    });
  }
}
