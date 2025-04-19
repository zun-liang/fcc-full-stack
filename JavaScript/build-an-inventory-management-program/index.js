let inventory = [];

const findProductIndex = (name) => {
  for (let i = 0; i < inventory.length; i++) {
    if (name.toLowerCase() === inventory[i].name.toLowerCase()) {
      return i;
    }
  }
  return -1;
};

const addProduct = (product) => {
  if (findProductIndex(product.name) === -1) {
    inventory.push(product);
    console.log(`${product.name.toLowerCase()} added to inventory`);
  } else {
    inventory[findProductIndex(product.name)].quantity += product.quantity;
    console.log(`${product.name.toLowerCase()} quantity updated`);
  }
};

const removeProduct = (name, quantity) => {
  let index = findProductIndex(name);
  if (index === -1) {
    console.log(`${name.toLowerCase()} not found`);
  } else if (inventory[index].quantity > quantity) {
    inventory[index].quantity -= quantity;
  } else if (inventory[index].quantity === quantity) {
    let left = inventory.slice(0, index);
    let right = inventory.slice(index + 1);
    inventory = [...left, ...right];
  } else {
    console.log(
      `Not enough ${name.toLowerCase()} available, remaining pieces: ${
        inventory[index].quantity
      }`
    );
  }
};

console.log(removeProduct("FLOUR", 5));
