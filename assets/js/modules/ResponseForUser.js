export default class ResponseForUser {
  constructor(classSelector, responseAutors) {
    this.selector = document.querySelector(`${classSelector}`);
    this.responseAutors = document.querySelectorAll(`${responseAutors}`);
    this.activeResponse(this.selector, this.responseAutors);
  }

  activeResponse(response, responseAutors) {
    function activeResponseForUser(e) {
      e.preventDefault();
      responseAutors.forEach((item) => {
        item.classList.toggle("active");
      });
    }
    response.addEventListener("click", activeResponseForUser);
  }
}
