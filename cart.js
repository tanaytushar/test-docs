function addToCart(productId, quantity, price, discount, note) {
  return { productId: productId, quantity: quantity, price: price, discount: discount, note: note };
}

function removeFromCart(productId) {
  return { removed: productId };
}

function clearCart() {
  return { cleared: true };
}

module.exports = { addToCart, removeFromCart, clearCart };
