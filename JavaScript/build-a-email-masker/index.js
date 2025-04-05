const maskEmail = (email) => {
  const atIndex = email.indexOf("@");
  const name = email.slice(0, atIndex);
  if (name.length <= 2) {
    return email;
  }
  return (
    email[0] +
    "*".repeat(name.length - 2) +
    email[atIndex - 1] +
    email.slice(atIndex)
  );
};

let email = "apple.pie@example.com";
console.log(maskEmail(email));

email = "freecodecamp@example.com";
console.log(maskEmail(email));
