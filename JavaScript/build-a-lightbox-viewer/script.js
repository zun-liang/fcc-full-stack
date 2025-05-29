const galleryItems = document.querySelectorAll(".gallery-item");
const lightBox = document.querySelector(".lightbox");

const displayGalleryItem = () => {
  console.log("clicked");
  lightBox.computedStyleMap.display = "flex";
};

galleryItems.forEach((item) =>
  item.addEventListener("click", displayGalleryItem)
);
