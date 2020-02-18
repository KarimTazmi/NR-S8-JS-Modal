var modal = document.querySelector("#myModal");

var img = document.querySelector("#gallery__image");
var modalImg = document.querySelector("#gallery__images");
var captionText = document.querySelector("#modal__caption");
img.onclick = function() {
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
};

var span = document.getElementsByClassName("close")[0];

span.onclick = function() {
  modal.style.display = "none";
};
