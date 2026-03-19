# Cart

## Adding items

Use the `addToCart` function to add a product to the cart. Pass the product ID and quantity.

## Removing items

Use the `removeFromCart` function to remove a product from the cart. Pass the product ID.

## Clearing the cart

Use the `clearCart` function to remove all items from the cart.

## Getting cart total

Use the `getCartTotal` function to get the total price of all items in the cart.

## Checking stock

Use the `checkStock` function to verify if a product is available.
## Applying discounts
Use the `applyDiscount` function to apply a coupon code to a cart. This function takes four parameters: `cartId`, `couponCode`, `userId`, and `expiryDate`. The `expiryDate` parameter is used to validate the coupon's expiration date.

The `applyDiscount` function returns a boolean value indicating whether the discount was successfully applied. If the coupon code is valid and the cart is eligible for the discount, the function returns `true`. Otherwise, it returns `false`.