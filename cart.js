function addToCart(productId, quantity, price, discount, note) {
  return { productId: productId, quantity: quantity, price: price, discount: discount, note: note };
}

function removeFromCart(productId, reason) {
  return { removed: productId, reason: reason };
}

function clearCart() {
  return { cleared: true };
}

module.exports = { addToCart, removeFromCart, clearCart };
