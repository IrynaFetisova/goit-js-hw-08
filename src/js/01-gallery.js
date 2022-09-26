// Add imports above this line
import { galleryItems } from './gallery-items.js';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryRef = document.querySelector('.gallery');
const galleryPic = [...galleryItems].map(({preview, original, description}) => `<a class="gallery__link" href="${original}">
<img
  class="gallery__image"
  src="${preview}"
  alt="${description}"
/>
</a>`);

const markup = galleryPic.join('');
galleryRef.insertAdjacentHTML('beforeend', markup);
console.log(galleryItems);

new SimpleLightbox(".gallery a", {
  captions: true,
  captionsData: "alt",
  captionDelay: "250ms",
});