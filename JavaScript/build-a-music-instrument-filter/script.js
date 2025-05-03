const instrumentsArr = [
  {
    category: "woodwinds",
    instrument: "Flute",
    price: 500,
  },
  {
    category: "woodwinds",
    instrument: "Clarinet",
    price: 200,
  },
  {
    category: "woodwinds",
    instrument: "Oboe",
    price: 4000,
  },
  { category: "brass", instrument: "Trumpet", price: 200 },
  { category: "brass", instrument: "Trombone", price: 300 },
  { category: "brass", instrument: "French Horn", price: 4300 },
  { category: "percussion", instrument: "Drum Set", price: 500 },
  { category: "percussion", instrument: "Xylophone", price: 3000 },
  { category: "percussion", instrument: "Cymbals", price: 200 },
  { category: "percussion", instrument: "Marimba", price: 3000 },
];

const selectContainer = document.querySelector(".select-container");
const productsContainer = document.querySelector(".products-container");

const instrumentCards = (instrumentCategory) => {
  let resultArr;
  if (instrumentCategory === "all") {
    resultArr = instrumentsArr;
  } else {
    resultArr = instrumentsArr.filter(
      (instrument) => instrument.category === instrumentCategory
    );
  }
  return resultArr
    .map(
      (instrument) =>
        `<div class="card"><h2>${instrument.instrument}</h2><p>$${instrument.price}</p></div>`
    )
    .join("");
};

selectContainer.addEventListener("change", () => {
  productsContainer.innerHTML = instrumentCards(selectContainer.value);
});
