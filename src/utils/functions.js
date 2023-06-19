function sumCart(cart) {
  let sum = 0;
  cart.forEach((product) => {
    let value = 0;
    value = product.count * product.price;
    sum += value;
  });
  return sum;
}

export { sumCart };
