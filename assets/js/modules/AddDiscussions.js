export default class AddDiscussions {
  constructor(
    selectorButton,
    showDiscussionsAdd,
    closeDiscussionsAdd,
    removeTopic,
    discussionsRemove,
    showSuccess,
    cardAddSucess
  ) {
    this.selectorButton = document.querySelector(`${selectorButton}`);
    this.showDiscussionsAdd = document.querySelector(`${showDiscussionsAdd}`);
    this.closeDiscussionsAdd = document.querySelector(`${closeDiscussionsAdd}`);
    this.toAddDiscussions(
      this.selectorButton,
      this.showDiscussionsAdd,
      this.closeDiscussionsAdd
    );

    this.removeTopic = document.querySelector(`${removeTopic}`);
    this.showSuccess = document.querySelector(`${showSuccess}`);
    this.discussionsRemove = document.querySelector(`${discussionsRemove}`);
    this.cardAddSucess = document.querySelector(`${cardAddSucess}`);
    this.removeDiscussions(
      this.removeTopic,
      this.discussionsRemove,
      this.showSuccess,
      this.cardAddSucess
    );
  }

  toAddDiscussions(selectorButton, showDiscussionsAdd, closeDiscussionsAdd) {
    selectorButton.addEventListener("click", (e) => {
      e.preventDefault();
      showDiscussionsAdd.classList.add("active");
      closeDiscussionsAdd.classList.add("remove");
    });
  }

  removeDiscussions(
    removeTopic,
    discussionsRemove,
    showSuccess,
    cardAddSucess
  ) {
    removeTopic.addEventListener("click", (e) => {
      e.preventDefault();
      discussionsRemove.classList.remove("active");
      showSuccess.classList.add("active");
      cardAddSucess.classList.add("active");
    });
  }
}
