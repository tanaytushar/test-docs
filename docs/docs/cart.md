# Cart

## Adding items

Use the `addToCart` function to add a product to the cart. Pass the product ID and quantity.

## Removing items

Use the `removeFromCart` function to remove a product from the cart. Pass the product ID.

## Clearing the cart

Use the `clearCart` function to remove all items from the cart.

## Getting cart total
Use the `getCartTotal` function to get the total price of all items in the cart.

The `getCartTotal` function takes three parameters:

* `cartId`: The ID of the cart for which to calculate the total.
* `currency`: The currency in which to display the total.
* `includeDiscounts`: A boolean indicating whether to include discounts in the total calculation (default is false).

Example usage:
```javascript
const cartTotal = getCartTotal('cart-123', 'USD', true);
```