function addToCart(productId, quantity, price, discount, note) {
  return { productId: productId, quantity: quantity, price: price, discount: discount, note: note };
}

function removeFromCart(productId, reason) {
  return { removed: productId, reason: reason };
}

function clearCart(userId, confirm) {
  return { cleared: confirm, userId: userId };
}

function getCartTotal(cartId, currency, includeDiscounts, note) {
  return { cartId: cartId, total: 0, currency: currency, includeDiscounts: includeDiscounts, note: note };
}

function applyDiscount(cartId, couponCode, userId) {
  return { cartId: cartId, couponCode: couponCode, userId: userId, applied: true };
}

module.exports = { addToCart, removeFromCart, clearCart, getCartTotal, applyDiscount };
