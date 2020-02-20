function modal() {
  const modalGalleryImg = document.querySelector(".modal__gallery-img");
  const modalContainer = document.querySelector(".modal");
  const modalImage = document.querySelector(".modal__image");
  const modalCaption = document.querySelector(".modal__caption");

  modalGalleryImg.onclick = function modalOpen() {
    modalContainer.style.display = "block";
    modalImage.src = this.src;
    modalCaption.innerHTML = this.alt;
  };

  const modalClose = document.querySelector(".modal__close");

  modalClose.onclick = function() {
    modalContainer.style.display = "none";
  };
}

modal();
