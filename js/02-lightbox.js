import { galleryItems } from "./gallery-items.js";

let parentEl = document.querySelector(".gallery");

function elements() {
  return galleryItems
    .map(
      ({ original, description, preview }) =>
        `<li class="gallery__item">
   <a class="gallery__link" data-ligthbox="lbox" href="${original}".jpg">
      <img class="gallery__image" src="${preview}" alt="${description}" />
   </a>
</li>
  `
    )
    .join("");
}
parentEl.insertAdjacentHTML("afterbegin", elements());

let ligthbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});
