// scripts.js

// Add a cart array to store items
var cartItems = [];

function addToCart(button) {
    // Get menu item details
    var menuItem = button.closest('.menu-item');
    var itemName = menuItem.querySelector('h3').textContent;
    var itemPrice = parseFloat(menuItem.querySelector('.menu-item-price').textContent.replace('₹ ', ''));

    // Check if the item is already in the cart
    var existingItem = cartItems.find(item => item.name === itemName);

    if (existingItem) {
        // If the item is already in the cart, update its count
        existingItem.count += 1;
    } else {
        // If the item is not in the cart, add it with count 1
        cartItems.push({ name: itemName, price: itemPrice, count: 1 });
    }

    updateCartIcon();
}

function removeFromCart(button) {
    // Get menu item details
    var menuItem = button.closest('.menu-item');
    var itemName = menuItem.querySelector('h3').textContent;

    // Check if the item is in the cart
    var existingItem = cartItems.find(item => item.name === itemName);

    if (existingItem && existingItem.count > 0) {
        // If the item is in the cart and its count is greater than 0, update its count
        existingItem.count -= 1;
    }

    updateCartIcon();
}

function updateCartIcon() {
    var cartCountElement = document.getElementById('cart-count-icon');
    var totalCount = cartItems.reduce((total, item) => total + item.count, 0);
    cartCountElement.textContent = totalCount;

    // Update the total sum on the left side of the close button inside the cart modal
    var cartTotalElement = document.getElementById('cart-total');
    var totalSum = cartItems.reduce((sum, item) => sum + item.price * item.count, 0);
    cartTotalElement.textContent = 'Total: ₹' + totalSum.toFixed(2);
}

function toggleCart() {
    var cartModal = document.getElementById('cart-modal');
    var cartItemsContainer = document.getElementById('cart-items');

    // Clear previous cart items
    cartItemsContainer.innerHTML = '';

    // Display cart items in the modal
    if (cartItems.length > 0) {
        cartItems.forEach(function (item) {
            var cartItemElement = document.createElement('div');
            cartItemElement.textContent = item.name + ' - ₹' + (item.price * item.count).toFixed(2) + ' x ' + item.count;
            cartItemsContainer.appendChild(cartItemElement);
        });
    } else {
        // Display a message if the cart is empty
        var emptyCartMessage = document.createElement('p');
        emptyCartMessage.textContent = 'Your cart is empty.';
        cartItemsContainer.appendChild(emptyCartMessage);
    }

    // Show/hide the cart modal
    $(cartModal).modal('toggle');
}

function proceedToBuy() {
    // Redirect to the payment page
    window.location.href = 'payment.html';
}

// nav bar 
function toggleNavbar(x) {
    x.classList.toggle("change");
    var navbarCollapse = document.getElementById("navbarNav");
    navbarCollapse.classList.toggle("show");
}