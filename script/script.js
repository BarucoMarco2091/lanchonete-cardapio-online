AOS.init();

const menu = document.getElementById("menu");
const cartModal = document.getElementById("cart-modal");
const cartItemsContainer = document.getElementById("cart-items");
const cartTotal = document.getElementById("cart-total");
const closeModalBtn = document.getElementById("close-modal-btn");
const checkoutBtn = document.getElementById("checkout-btn");
const addressWarn = document.getElementById("address-warn");
const addressInput = document.getElementById("address");
const cartBtn = document.getElementById("cart-btn");
const cartCounter = document.getElementById("carr-count");

let cart = [];

cartBtn.addEventListener("click", function() {
    cartModal.style.display = "flex";
});

closeModalBtn.addEventListener("click", function() {
    cartModal.style.display = "none";
});

cartModal.addEventListener("click", function(event) {
    if(event.target === cartModal) {
        cartModal.style.display = "none";
    };
});