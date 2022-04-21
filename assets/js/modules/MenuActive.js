export default class MenuActive {
  constructor(classSelector, sideBar) {
    this.selector = document.querySelector(`${classSelector}`);
    this.sideBar = document.querySelector(`${sideBar}`);
    this.activeMenu(this.selector, this.sideBar);
  }

  activeMenu(selector, sideBar) {
    selector.addEventListener('click', () => {
      selector.classList.toggle("active");
      sideBar.classList.toggle("active");
    })
  }
}
