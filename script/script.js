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
    updateCartModal();
};

// Atualiza o carrinho

function updateCartModal() {
    cartItemsContainer.innerHTML = "";
    let total = 0;
    cart.forEach(item => {
        const cartItemElement = document.createElement("div");
        cartItemElement.innerHTML =
            `
        <div style="display: flex; justify-content: space-between; max-height: 400px; overflow-y: auto;">
            <div>
                <p>${item.name}</p>
                <p>Qtd: ${item.quantity}</p>
                <p>R$ ${item.price.toFixed(2)}</p>
            </div>
            <div>
                <button class="remove-from-cart-btn" data-name="${item.name}">Remover</button>
            </div>
        </div>
        `
        total += item.price * item.quantity;

        cartItemsContainer.appendChild(cartItemElement);
    });

    cartTotal.textContent = total.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL"
    });

    // Mudar o contador

    cartCounter.innerHTML = cart.length;
};

// Função para remover item do carrinho
cartItemsContainer.addEventListener("click", function(event) {
    if(event.target.classList.contains("remove-from-cart-btn")) {
        const name = event.target.getAttribute("data-name");
        removeItemCart(name);
    };
});

function removeItemCart(name) {
    const index = cart.findIndex(item => item.name === name);
    if(index !== -1) {
        const item = cart[index];
        if(item.quantity > 1) {
            item.quantity -= 1;
            updateCartModal();
            return;
        };
        cart.splice(index, 1);
        updateCartModal();
    };
};

// pegar o endereço

addressInput.addEventListener('input', function(event) {
    let inputValue = event.target.value;
    if(inputValue !== "") {
        addressWarn.style.display = "none"
    };
});

// finalizar pedido 

checkoutBtn.addEventListener('click', function() {
    
});