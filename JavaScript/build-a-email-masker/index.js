const maskEmail = (email) => {
  atIndex = email.indexOf("@");
  firstLetter = email[0];
  lastLetter = email[atIndex - 1];
  asteriskLength = atIndex - 2;
  masked = "";
  for (let i = 0; i < asteriskLength; i++) {
    masked += "*";
  }
  return firstLetter + masked + lastLetter + email.slice(atIndex);
};
let email = "hello2025@gmail.com";
console.log(maskEmail(email));
