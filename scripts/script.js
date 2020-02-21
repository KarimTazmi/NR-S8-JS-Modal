// function modal() {
//   const modalGalleryImg = document.querySelector(".modal__gallery-img");
//   const modalContainer = document.querySelector(".modal");
//   const modalImage = document.querySelector(".modal__image");
//   const modalCaption = document.querySelector(".modal__caption");

//   modalGalleryImg.onclick = function modalOpen() {
//     modalContainer.style.display = "block";
//     modalImage.src = this.src;
//     modalCaption.innerHTML = this.alt;
//   };

//   const modalClose = document.querySelector(".modal__close");

//   modalClose.onclick = function() {
//     modalContainer.style.display = "none";
//   };
// }

// modal();

function initializeImageGalleries() {
  const galleries = document.querySelectorAll("[data-gallery]");

  if (!galleries) return;

  const modal = document.createElement("div");
  modal.className = "modal";

  galleries.forEach(function(gallery) {
    const images = gallery.querySelectorAll("img");
    const galleryMeta = document.createElement("p");
    galleryMeta.textContent = `This gallery contains ${images.length} images`;
    gallery.insertAdjacentElement("beforebegin", galleryMeta);

    images.forEach(image => {
      image.addEventListener("click", handleImageClick);
    });
  });

  function handleImageClick(e) {
    console.log(e.target);

    const title = e.target.title;
    const src = e.target.dataset.image;
    const description = e.target.dataset.description
      ? e.target.dataset.description
      : "";

    modal.innerHTML = `
    <h1>${title}</h1>
    <figure>
    <img src="${src}" />
    <figcaption>${!description ? description : ""}</figcaption>
    </figure>
    `;

    document.querySelector("body").append(modal);
  }
}

initializeImageGalleries();
