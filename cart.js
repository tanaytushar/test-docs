function addToCart(productId, quantity, price, discount) {
  return { productId: productId, quantity: quantity, price: price, discount: discount };
}

function removeFromCart(productId) {
  return { removed: productId };
}

function clearCart() {
  return { cleared: true };
}

module.exports = { addToCart, removeFromCart, clearCart };
