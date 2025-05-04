const textInput = document.getElementById("text-input");
const charCount = document.getElementById("char-count");
const getLength = () => {
  console.log(textInput.ariaValueMax.length);
};
textInput.addEventListener("input", getLength);
