export default class MenuActive {
  constructor(classSelector) {
    this.selector = document.querySelector(`${classSelector}`);
    this.activeMenu(this.selector);
  }

  activeMenu(selector) {
    selector.addEventListener('click', () => {
      selector.classList.toggle("active");
      const sideBar = document.querySelector(".side-bar-responsive");
      sideBar.classList.toggle("active");
    })
  }
}
