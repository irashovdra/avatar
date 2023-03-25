(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-open-trailer]"),
    closeModalBtn: document.querySelector("[data-close-trailer]"),
    backdrop: document.querySelector("[data-trailer]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  refs.backdrop.addEventListener("click", logBackdropClick);

  function toggleModal() {
    refs.backdrop.classList.toggle("is-hidden");
  }

  function logBackdropClick() {
    console.log("Це клік в бекдроп");
  }
})();
