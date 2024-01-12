import { galleryItems } from "./gallery-items.js";

let parentEl = document.querySelector(".gallery");
parentEl.insertAdjacentHTML("afterbegin", elements());

parentEl.addEventListener("click", handlClick);

function elements() {
  return galleryItems
    .map(
      ({ original, description, preview }) =>
        `<li class="gallery__item">
      <a class="gallery__link" href="${original}">
        <img
          class="gallery__image"
          src="${preview}"
          data-source="${original}"
          alt="${description}"
        />
      </a>
    </li>
  `
    )
    .join("");
}

const instance = basicLightbox.create(
  `<img src={}" width="800" height="600">`,
  {
    onShow: (instance) => {
      window.addEventListener("keydown", onPressEsc);
    },
    onClose: (instance) => {
      window.removeEventListener("keydown", onPressEsc);
    },
  }
);

function handlClick(e) {
  e.preventDefault();
  let dataSet = e.target.dataset.source;
  if (e.target.nodeName !== "IMG") {
    return;
  }
  instance.element().querySelector("img").src = dataSet;
  instance.show();
}

function onPressEsc(e) {
  if (e.code === "Escape") {
    instance.close();
  }
}
