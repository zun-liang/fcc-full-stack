const generatePassword = (length) => {
  let string =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";
  let password = "";
  for (let i = 0; i < length; i++) {
    password += string[Math.floor(Math.random() * string.length)];
  }
  return password;
};

let password = generatePassword(10);
console.log(`Generated password: ${password}`);
