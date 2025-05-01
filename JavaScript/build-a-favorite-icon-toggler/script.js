let hearts = document.querySelectorAll(".favorite-icon");

const toggleHeart = (heart) => {
  if (heart.classList.contains("filled")) {
    heart.classList.remove("filled");
    heart.innerHTML = "&#9825;";
  } else {
    heart.classList.add("filled");
    heart.innerHTML = "&#10084;";
  }
};

hearts.forEach((heart) =>
  heart.addEventListener("click", () => toggleHeart(heart))
);
