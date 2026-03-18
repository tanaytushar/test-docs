function addToCart(productId, quantity, price, discount, note) {
  return { productId: productId, quantity: quantity, price: price, discount: discount, note: note };
}

function removeFromCart(productId, reason) {
  return { removed: productId, reason: reason };
}

function clearCart(userId, confirm) {
  return { cleared: confirm, userId: userId };
}

function getCartTotal(cartId, currency) {
  return { cartId: cartId, total: 0, currency: currency };
}

module.exports = { addToCart, removeFromCart, clearCart, getCartTotal };
