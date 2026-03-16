function addToCart(productId, quantity) {
  return { productId: productId, quantity: quantity };
}

function removeFromCart(productId) {
  return { removed: productId };
}

module.exports = { addToCart, removeFromCart };
