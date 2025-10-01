// Dark Mode Toggle Functionality
document.addEventListener('DOMContentLoaded', function() {
    const darkModeSwitch = document.getElementById('darkModeSwitch');
    const body = document.body;
    
    // Check for saved dark mode preference
    const isDarkMode = localStorage.getItem('darkMode') === 'true';
    if (isDarkMode) {
        body.classList.add('dark-mode');
        darkModeSwitch.checked = true;
        updateToggleLabel(true);
    }
    
    // Dark mode toggle event listener
    darkModeSwitch.addEventListener('change', function() {
        const isChecked = this.checked;
        if (isChecked) {
            body.classList.add('dark-mode');
            localStorage.setItem('darkMode', 'true');
        } else {
            body.classList.remove('dark-mode');
            localStorage.setItem('darkMode', 'false');
        }
        updateToggleLabel(isChecked);
    });
    
    function updateToggleLabel(isDark) {
        const label = document.querySelector('label[for="darkModeSwitch"]');
        label.textContent = isDark ? '☀️' : '🌙';
    }
});

// Language Selection Functionality
document.addEventListener('DOMContentLoaded', function() {
    const languageDropdown = document.getElementById('languageDropdown');
    const languageItems = document.querySelectorAll('.dropdown-item[data-lang]');
    
    // Check for saved language preference
    const savedLanguage = localStorage.getItem('selectedLanguage') || 'en';
    updateLanguageDisplay(savedLanguage);
    
    // Language selection event listeners
    languageItems.forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            const selectedLang = this.getAttribute('data-lang');
            const selectedText = this.textContent;
            
            // Update dropdown button
            languageDropdown.innerHTML = selectedText.substring(0, 4) + selectedText.substring(2, 4).toUpperCase();
            
            // Save selection
            localStorage.setItem('selectedLanguage', selectedLang);
            
            // Here you would typically implement actual language switching
            console.log('Language changed to:', selectedLang);
        });
    });
    
    function updateLanguageDisplay(langCode) {
        const langMap = {
            'en': '🌐 EN',
            'es': '🌐 ES',
            'fr': '🌐 FR',
            'de': '🌐 DE',
            'it': '🌐 IT',
            'pt': '🌐 PT',
            'zh': '🌐 ZH',
            'ja': '🌐 JA'
        };
        languageDropdown.innerHTML = langMap[langCode] || '🌐 EN';
    }
});

// Search Functionality
document.addEventListener('DOMContentLoaded', function() {
    const searchForm = document.querySelector('form[role="search"]');
    const searchInput = document.querySelector('input[type="search"]');
    
    searchForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const searchTerm = searchInput.value.trim();
        if (searchTerm) {
            // Here you would typically implement actual search functionality
            console.log('Searching for:', searchTerm);
            alert(`Searching for: ${searchTerm}`);
        }
    });
});

// Cart page navigation
document.addEventListener('DOMContentLoaded', function() {
    // Cart navigation
    let cartLink = null;
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        if (link.textContent.trim().toLowerCase().includes('cart')) {
            cartLink = link;
        }
    });
    
    if (cartLink) {
        cartLink.addEventListener('click', (e) => {
            e.preventDefault();
            showCartPage();
        });
    }
    
    // Continue shopping button
    const continueShoppingBtn = document.querySelector('#continueShopping');
    if (continueShoppingBtn) {
        continueShoppingBtn.addEventListener('click', () => {
            showMainPage();
        });
    }
    
    // Checkout button
    const checkoutBtn = document.querySelector('#checkoutBtn');
    if (checkoutBtn) {
        checkoutBtn.addEventListener('click', () => {
            if (cart.length === 0) {
                alert('Your cart is empty!');
                return;
            }
            alert('Proceeding to checkout... (Feature coming soon!)');
        });
    }
});
document.addEventListener('DOMContentLoaded', function() {
    // Cart navigation
    let cartLink = null;
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        if (link.textContent.trim().toLowerCase().includes('cart')) {
            cartLink = link;
        }
    });
    
    if (cartLink) {
        cartLink.addEventListener('click', (e) => {
            e.preventDefault();
            showCartPage();
        });
    }
    
    // Continue shopping button
    const continueShoppingBtn = document.querySelector('#continueShopping');
    if (continueShoppingBtn) {
        continueShoppingBtn.addEventListener('click', () => {
            showMainPage();
        });
    }
    
    // Checkout button
    const checkoutBtn = document.querySelector('#checkoutBtn');
    if (checkoutBtn) {
        checkoutBtn.addEventListener('click', () => {
            if (cart.length === 0) {
                alert('Your cart is empty!');
                return;
            }
            alert('Proceeding to checkout... (Feature coming soon!)');
        });
    }
});

// Show cart page
function showCartPage() {
    const mainSection = document.querySelector("#section-body");
    const cartPage = document.querySelector("#cartPage");
    const loginForm = document.querySelector("#loginForm");
    const registerForm = document.querySelector("#RP");
    
    if (mainSection) mainSection.style.display = "none";
    if (loginForm) loginForm.style.display = "none";
    if (registerForm) registerForm.style.display = "none";
    if (cartPage) cartPage.style.display = "block";
    
    displayCartItems();
}

// Show main page
function showMainPage() {
    const mainSection = document.querySelector("#section-body");
    const cartPage = document.querySelector("#cartPage");
    const loginForm = document.querySelector("#loginForm");
    const registerForm = document.querySelector("#RP");
    
    if (mainSection) mainSection.style.display = "block";
    if (cartPage) cartPage.style.display = "none";
    if (loginForm) loginForm.style.display = "none";
    if (registerForm) registerForm.style.display = "none";
}

// Display cart items
function displayCartItems() {
    const cartItemsContainer = document.querySelector('#cartItems');
    const cartTotalElement = document.querySelector('#cartTotal');
    
    if (!cartItemsContainer) return;
    
    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<div class="empty-cart"><h4>Your cart is empty</h4><p>Add some products to get started!</p></div>';
        cartTotalElement.textContent = 'Total: $0.00';
        return;
    }
    
    let cartHTML = '';
    let total = 0;
    
    cart.forEach((item, index) => {
        const itemTotal = parseFloat(item.price.replace('$', '')) * item.quantity;
        total += itemTotal;
        
        cartHTML += `
            <div class="cart-item" data-index="${index}">
                <img src="${item.image}" alt="${item.name}" class="cart-item-image">
                <div class="cart-item-details">
                    <div class="cart-item-name">${item.name}</div>
                    <div class="cart-item-price">${item.price}</div>
                    <div class="cart-item-quantity">
                        <button class="quantity-btn" onclick="updateQuantity(${index}, -1)">-</button>
                        <input type="number" class="quantity-input" value="${item.quantity}" min="1" onchange="updateQuantity(${index}, 'set', this.value)">
                        <button class="quantity-btn" onclick="updateQuantity(${index}, 1)">+</button>
                        <button class="remove-btn" onclick="removeFromCart(${index})">Remove</button>
                    </div>
                    <div class="item-total">Subtotal: $${itemTotal.toFixed(2)}</div>
                </div>
            </div>
        `;
    });
    
    cartItemsContainer.innerHTML = cartHTML;
    cartTotalElement.textContent = `Total: $${total.toFixed(2)}`;
}

// Update quantity
function updateQuantity(index, change, setValue = null) {
    if (setValue !== null) {
        const newQuantity = parseInt(setValue);
        if (newQuantity > 0) {
            cart[index].quantity = newQuantity;
        }
    } else {
        cart[index].quantity += change;
        if (cart[index].quantity <= 0) {
            cart.splice(index, 1);
        }
    }
    
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
    displayCartItems();
}

// Remove from cart
function removeFromCart(index) {
    cart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
    displayCartItems();
}


// register page----------------
let main=document.querySelector("#section-body")
let form=document.querySelector("#RP")
let lF1=document.querySelector("#loginForm")
let registerButton=document.querySelector("#registerbutton")
registerButton.addEventListener("click",()=>{
     let R=registerButton.classList.toggle("none")
if(R){
    form.style.display="block"
    main.style.display="none"
    lF1.style.display="none"
}
else{
    form.style.display="none"
    main.style.display="block"
    lF.style.display="none"
}
})


//login page----------

let main1=document.querySelector("#section-body")
let lF=document.querySelector("#loginForm")
let Rg=document.querySelector("#RP")
let lb=document.querySelector("#loginbutton")
lb.addEventListener("click",()=>{
    let L=lb.classList.toggle("none")
if(L){
    lF.style.display="block"
    main1.style.display="none"
    Rg.style.display="none"
}
else{
    main1.style.display="block"
    lF.style.display="none"
    Rg.style.display="none"
}
})

//home page------------
let HP=document.querySelector("#homepagee")
let mainSection=document.querySelector("#section-body") 
HP.addEventListener("click",()=>{
    showMainPage();
})


// register page submit button and storing inputs in local storage
let signup=document.querySelector("#RP")
let inp1=document.querySelector("#inp1")
let inp2=document.querySelector("#inp2")
let inp3=document.querySelector("#inp3")
let inp4=document.querySelector("#inp4")
let inp5=document.querySelector("#inp5")

signup.addEventListener("click",(e)=>{
    e.preventDefault()
    if(e.target.innerText=="submit"){
    // console.log(inp1.value);
    // console.log(inp2.value);
    // console.log(inp3.value);
    // console.log(inp4.value);
    window.localStorage.setItem("Firstname",inp1.value)
    window.localStorage.setItem("Lastname",inp2.value)
    window.localStorage.setItem("Email",inp3.value)
    window.localStorage.setItem("Password",inp4.value)
    
    alert("Registration successful! Now Signin ."); //Data saved to localStorage
    
    // Clear the form after successful registration
    inp1.value = '';
    inp2.value = '';
    inp3.value = '';
    inp4.value = '';
    inp4.value = '';
    inp5.value = '';
    mainSection.style.display="none"
    form.style.display="none"
    lF.style.display="block"

}
})

// if you click on signin in register page then login page will open
let signin=document.querySelector("#openlogin")
signin.addEventListener("click",()=>{
     mainSection.style.display="none"
    form.style.display="none"
    lF.style.display="block"
})

// if you click on Sign UP button in login page then register page will open
let Signup=document.querySelector("#openregister")
Signup.addEventListener("click",()=>{
    mainSection.style.display="none"
    form.style.display="block"
    lF.style.display="none"
})



// login page submit button and checking inputs with local storage
let login=document.querySelector("#loginForm")
let loginButton=document.querySelector(".button-submit") // Target the actual submit button in the form

if (loginButton) {
    loginButton.addEventListener("click",(e)=>{
        e.preventDefault()
        
        // Get input values using proper selectors
        let emailInput = login.querySelector('input[type="text"]') // Email input
        let passwordInput = login.querySelector('input[type="password"]') // Password input
        
        if (!emailInput || !passwordInput) {
            alert("Login form inputs not found!")
            return
        }
        
        let email = emailInput.value.trim()
        let password = passwordInput.value.trim()
        
        console.log("Attempting login with:", email) // Debug
        console.log("Stored email:", localStorage.getItem("Email")) // Debug
        
        if(email === window.localStorage.getItem("Email") && password === window.localStorage.getItem("Password")){
            alert("Login successful!")
            mainSection.style.display="block"
            form.style.display="none"
            lF.style.display="none"
            // Clear form
            emailInput.value = ""
            passwordInput.value = ""
        }else{
            alert("Invalid email or password.")
            // Clear only password for security
            passwordInput.value = ""
        }
    })
} else {
    console.error("Login button not found!")
}


// Enhanced Cart System with all features
// Initialize cart from localStorage
let cart = JSON.parse(localStorage.getItem('shoppingCart')) || [];

// Save cart to localStorage
function saveCart() {
    localStorage.setItem('shoppingCart', JSON.stringify(cart));
}

// Update cart badge in navbar
function updateCartBadge() {
    const navLinks = document.querySelectorAll('.nav-link');
    let cartNavLink = null;
    
    navLinks.forEach(link => {
        if (link.textContent.toLowerCase().includes('cart')) {
            cartNavLink = link;
        }
    });
    
    if (cartNavLink) {
        const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
        if (totalItems > 0) {
            cartNavLink.innerHTML = `Cart <span class="cart-badge">${totalItems}</span>`;
        } else {
            cartNavLink.textContent = 'Cart';
        }
    }
}

// Add product to cart
function addToCart(productName, productPrice, productImage) {
    // Check if product already exists
    const existingItem = cart.find(item => item.name === productName);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            id: Date.now(),
            name: productName,
            price: parseFloat(productPrice.replace('$', '')),
            image: productImage,
            quantity: 1
        });
    }
    
    saveCart();
    updateCartBadge();
    displayCartTotal();
    
    // Show success message
    showAddedToCartMessage(productName);
}

// Show "Product Added" message
function showAddedToCartMessage(productName) {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    
    alert(`✅ ${productName} added to cart!\n\nItems in cart: ${totalItems}\nTotal: $${totalPrice.toFixed(2)}`);
}

// Update quantity of item in cart
function updateQuantity(index, newQuantity) {
    if (newQuantity <= 0) {
        cart.splice(index, 1);
    } else {
        cart[index].quantity = newQuantity;
    }
    
    saveCart();
    updateCartBadge();
    displayCartItems();
    displayCartTotal();
}

// Remove item from cart
function removeFromCart(index) {
    const itemName = cart[index].name;
    cart.splice(index, 1);
    saveCart();
    updateCartBadge();
    displayCartItems();
    displayCartTotal();
    alert(`${itemName} removed from cart`);
}

// Display cart total
function displayCartTotal() {
    const cartTotalElement = document.querySelector('#cartTotal');
    if (cartTotalElement) {
        const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        cartTotalElement.innerHTML = `
            <div class="cart-summary">
                <div>Items: ${cart.reduce((sum, item) => sum + item.quantity, 0)}</div>
                <div class="total-price">Total: $${total.toFixed(2)}</div>
            </div>
        `;
    }
}

// Enhanced cart display with increment/decrement
function displayCartItems() {
    const cartItemsContainer = document.querySelector('#cartItems');
    const cartTotalElement = document.querySelector('#cartTotal');
    
    if (!cartItemsContainer) return;
    
    if (cart.length === 0) {
        cartItemsContainer.innerHTML = `
            <div class="empty-cart">
                <h4>🛒 Your cart is empty</h4>
                <p>Add some products to get started!</p>
            </div>
        `;
        cartTotalElement.innerHTML = '<div class="cart-summary"><div class="total-price">Total: $0.00</div></div>';
        return;
    }
    
    let cartHTML = '';
    let total = 0;
    
    cart.forEach((item, index) => {
        const itemTotal = item.price * item.quantity;
        total += itemTotal;
        
        cartHTML += `
            <div class="cart-item" data-index="${index}">
                <img src="${item.image}" alt="${item.name}" class="cart-item-image" onerror="this.src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgZmlsbD0iI2VlZSIvPjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTQiIGZpbGw9IiM2NjYiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj5JbWFnZTwvdGV4dD48L3N2Zz4='">
                <div class="cart-item-details">
                    <div class="cart-item-name">${item.name}</div>
                    <div class="cart-item-price">$${item.price.toFixed(2)} each</div>
                    
                    <div class="cart-item-controls">
                        <div class="quantity-controls">
                            <button class="quantity-btn" onclick="updateQuantity(${index}, ${item.quantity - 1})">−</button>
                            <span class="quantity-display">${item.quantity}</span>
                            <button class="quantity-btn" onclick="updateQuantity(${index}, ${item.quantity + 1})">+</button>
                        </div>
                        <button class="remove-btn" onclick="removeFromCart(${index})">🗑️ Remove</button>
                    </div>
                    
                    <div class="item-subtotal">Subtotal: $${itemTotal.toFixed(2)}</div>
                </div>
            </div>
        `;
    });
    
    cartItemsContainer.innerHTML = cartHTML;
    
    // Update total
    cartTotalElement.innerHTML = `
        <div class="cart-summary">
            <div class="items-count">Total Items: ${cart.reduce((sum, item) => sum + item.quantity, 0)}</div>
            <div class="total-price">Total Amount: $${total.toFixed(2)}</div>
        </div>
    `;
}

// Initialize cart on page load
document.addEventListener('DOMContentLoaded', function() {
    updateCartBadge();
    
    // Enhanced Add to Cart buttons
    const addToCartButtons = document.querySelectorAll('.add-to-cart-btn');
    
    addToCartButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            
            const productCard = this.closest('.product-card');
            const productName = productCard.querySelector('.product-name').textContent;
            const productPrice = productCard.querySelector('.product-price').textContent;
            const productImage = productCard.querySelector('.product-image').src;
            
            // Add to cart
            addToCart(productName, productPrice, productImage);
            
            // Visual feedback
            const originalText = this.textContent;
            this.textContent = '✅ Added!';
            this.classList.remove('btn-primary');
            this.classList.add('btn-success');
            this.disabled = true;
            
            setTimeout(() => {
                this.textContent = originalText;
                this.classList.remove('btn-success');
                this.classList.add('btn-primary');
                this.disabled = false;
            }, 1500);
        });
    });
});

