const getVowelCount = (sentence) => {
  sentence = sentence.toLowerCase();
  let count = 0;
  for (let i = 0; i < sentence.length; i++) {
    for (let j = 0; j < "aeiou".length; j++) {
      if (sentence[i] === "aeiou"[j]) {
        count += 1;
      }
    }
  }
  return count;
};

const vowelCount = getVowelCount("Apples are tasty fruits");
console.log(`Vowel Count: ${vowelCount}`);

const getConsonantCount = (sentence) => {
  sentence = sentence.toLowerCase();
  let consonants = "bcdfghjklmnpqrstvwxyz";
  let count = 0;
  for (let i = 0; i < sentence.length; i++) {
    for (let j = 0; j < consonants.length; j++) {
      if (sentence[i] === consonants[j]) {
        count += 1;
      }
    }
  }
  return count;
};

const consonantCount = getConsonantCount("Coding is fun");
console.log(`Consonant Count: ${consonantCount}`);

const getPunctuationCount = (sentence) => {
  let count = 0;
  for (let i = 0; i < sentence.length; i++) {
    let code = sentence.charCodeAt(i);
    if (
      code == 32 ||
      (65 <= code && code <= 90) ||
      (97 <= code && code <= 122)
    ) {
      count += 1;
    }
  }
  return sentence.length - count;
};

const punctuationCount = getPunctuationCount("WHAT?!?!?!?!?");
console.log(`Punctuation Count: ${punctuationCount}`);

const getWordCount = (sentence) => {
  if (!sentence || !sentence.trim()) {
    return 0;
  }
  return sentence.split(" ").length;
};

const wordCount = getWordCount("I love freeCodeCamp");
console.log(`Word Count: ${wordCount}`);
