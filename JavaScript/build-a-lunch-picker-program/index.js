let lunches = [];

const addLunchToEnd = (arr, str) => {
  arr.push(str);
  console.log(`${str} added to the end of the lunch menu.`);
  return arr;
};

const addLunchToStart = (arr, str) => {
  arr.unshift(str);
  console.log(`${str} added to the start of the lunch menu.`);
  return arr;
};

const removeLastLunch = (arr) => {
  if (arr.length === 0) {
    console.log("No lunches to remove.");
  } else {
    let removed = arr.pop();
    console.log(`${removed} removed from the end of the lunch menu.`);
    return arr;
  }
};

const removeFirstLunch = (arr) => {
  if (arr.length === 0) {
    console.log("No lunches to remove.");
  } else {
    let removed = arr.shift();
    console.log(`${removed} removed from the start of the lunch menu.`);
    return arr;
  }
};

const getRandomLunch = (arr) => {
  if (arr.length === 0) {
    console.log("No lunches available.");
  } else {
    let randomIndex = Math.floor(Math.random() * arr.length);
    console.log(`Randomly selected lunch: ${arr[randomIndex]}`);
  }
};

const showLunchMenu = (arr) => {
  if (arr.length === 0) {
    console.log("The menu is empty.");
  } else {
    let result = "Menu items:";
    for (let i = 0; i < arr.length; i++) {
      if (i !== arr.length - 1) {
        result += " " + arr[i] + ",";
      } else {
        result += " " + arr[i];
      }
    }
    console.log(result);
  }
};
