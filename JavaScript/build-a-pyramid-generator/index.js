const pyramid = (s, n, facingDownwards) => {
  let lineLength = 1 + (n - 1) * 2;
  let spaceHalf = (lineLength - 1) / 2;
  let pyramidStr = "";
  for (let i = 0; i < n; i++) {
    pyramidStr += s;
  }
  return pyramidStr;
};
console.log(pyramid("o", 4, false));
