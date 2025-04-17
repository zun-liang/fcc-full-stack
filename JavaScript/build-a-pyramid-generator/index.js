const pyramid = (s, n, facingDownwards) => {
  let lineLength = 1 + (n - 1) * 2;
  let pyramidStr = "";
  if (!facingDownwards) {
    for (let i = 1; i <= lineLength; i += 2) {
      if (i === 1) {
        pyramidStr +=
          "\n" + " ".repeat((lineLength - i) / 2) + s.repeat(i) + "\n";
      } else {
        pyramidStr += " ".repeat((lineLength - i) / 2) + s.repeat(i) + "\n";
      }
    }
  } else {
    for (let i = lineLength; i >= 1; i -= 2) {
      if (i === lineLength) {
        pyramidStr +=
          "\n" + " ".repeat((lineLength - i) / 2) + s.repeat(i) + "\n";
      } else {
        pyramidStr += " ".repeat((lineLength - i) / 2) + s.repeat(i) + "\n";
      }
    }
  }

  return pyramidStr;
};
