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
const cartCounter = document.getElementById("cart-count");

let cart = [];

cartBtn.addEventListener("click", function () {
    cartModal.style.display = "flex";
});

closeModalBtn.addEventListener("click", function () {
    cartModal.style.display = "none";
});

cartModal.addEventListener("click", function (event) {
    if (event.target === cartModal) {
        cartModal.style.display = "none";
    };
});

// Adicionar produtos no carrinho
menu.addEventListener("click", function (event) {
    let parentButton = event.target.closest(".add-to-cart-btn");

    if (parentButton) {
        const name = parentButton.getAttribute("data-name");
        const price = parseFloat(parentButton.getAttribute("data-price"));

        // Adicionar ao carrinho chamando a função
        addToCart(name, price);
    };
});

// Função para adicionar ao carrinho

function addToCart(name, price) {
    const existingItem = cart.find(item => item.name === name);

    if (existingItem) {
        // Se o item já existe, aumenta apenas a quantidade + 1
        existingItem.quantity += 1;
    } else {
        cart.push({
            name,
            price,
            quantity: 1,
        });
    };
   
};

// Atualiza o carrinho

