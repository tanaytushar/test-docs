function addToCart(productId, quantity, price) {
  return { productId: productId, quantity: quantity, price: price };
}

function removeFromCart(productId) {
  return { removed: productId };
}

function clearCart() {
  return { cleared: true };
}

module.exports = { addToCart, removeFromCart, clearCart };
