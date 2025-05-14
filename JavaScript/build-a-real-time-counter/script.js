const textInput = document.getElementById("text-input");
const charCount = document.getElementById("char-count");
const getLength = () => {
  let inputLength = textInput.value.length;
  if (inputLength < 50) {
    charCount.textContent = `Character Count: ${inputLength}/50`;
  } else {
    charCount.textContent = `Character Count: 50/50`;
    charCount.style.color = "red";
    textInput.value = textInput.value.slice(0, 50);
  }
};
textInput.addEventListener("input", getLength);
