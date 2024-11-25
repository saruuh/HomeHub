// Function to sort offers by price
function sortOffersByPrice(order) {
    const offersContainer = document.querySelector('.offers-container');
    const offers = Array.from(offersContainer.children);

    // Parse prices and sort offers
    offers.sort((a, b) => {
        const priceA = parseFloat(a.querySelector('p').textContent.match(/Price: (\d+)/)[1]);
        const priceB = parseFloat(b.querySelector('p').textContent.match(/Price: (\d+)/)[1]);

        return order === "price-low-high" ? priceA - priceB : priceB - priceA;
    });

    // Append sorted offers back to the container
    offers.forEach(offer => offersContainer.appendChild(offer));
}

// Event listener for the sort dropdown
document.addEventListener('DOMContentLoaded', () => {
    const sortOptions = document.getElementById('sort-options');

    sortOptions.addEventListener('change', () => {
        const selectedOption = sortOptions.value;
        if (selectedOption === "price-low-high" || selectedOption === "price-high-low") {
            sortOffersByPrice(selectedOption);
        }
    });
});


function updateQuantity(productId, increment) {
    const quantityInput = document.getElementById(`quantity-${productId}`);
    let currentValue = parseInt(quantityInput.value);

    // Increment or decrement
    if (increment) {
        quantityInput.value = currentValue + 1;
    } else {
        // Ensure quantity doesn't go below 1
        if (currentValue > 1) {
            quantityInput.value = currentValue - 1;
        }
    }
}

// Add selected products to cart
function addToCart() {
    const cart = [];
    const checkboxes = document.querySelectorAll('.product-checkbox');

    checkboxes.forEach((checkbox) => {
        if (checkbox.checked) {
            const productId = checkbox.dataset.productId;
            const quantity = document.getElementById(`quantity-${productId}`).value;
            const productName = document.getElementById(`product-name-${productId}`).innerText;

            cart.push({ productId, productName, quantity });
        }
    });

    if (cart.length > 0) {
        console.log("Products added to cart:", cart);
        alert("Products added to cart successfully!");
    } else {
        alert("Please select at least one product to add to the cart.");
    }
}

// Redirect to Cart Page and Display Cart
function goToCart() {
    window.location.href = "cart.html";
}

function displayCart() {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const cartContainer = document.getElementById("cart-container");

    if (cart.length === 0) {
        cartContainer.innerHTML = "<p>Your cart is empty.</p>";
    } else {
        cartContainer.innerHTML = cart.map(item => `
            <div class="cart-item">
                <p>Product: ${item.name}</p>
                <p>Price: ${item.price} SAR</p>
                <p>Quantity: ${item.quantity}</p>
                <p>Total: ${item.price * item.quantity} SAR</p>
            </div>
        `).join("");
    }
}
