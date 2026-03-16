function createOrder(userId, items) {
  return { userId: userId, items: items };
}

module.exports = { createOrder };
