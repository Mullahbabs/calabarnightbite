// Vendor data
const vendors = {
  featured: {
    name: "Featured Items",
    items: [
      {
        id: 1,
        name: "Pepper Soup",
        description: "Spicy assorted meat pepper soup",
        price: 1500,
        minAmount: 1500,
        image: "img/m1.JPG",
      },
      {
        id: 2,
        name: "Suya",
        description: "Grilled spicy beef skewers",
        price: 500,
        minAmount: 500,
        image: "img/m2.JPG",
      },
      {
        id: 3,
        name: "Grilled Fish",
        description: "Fresh fish grilled with spices",
        price: 2500,
        minAmount: 2500,
        image: "img/m3.JPG",
      },
      {
        id: 4,
        name: "Edikang Ikong",
        description: "Pumpkin leaves and waterleaf soup",
        price: 2200,
        minAmount: 2200,
        image: "img/m4.JPG",
      },
    ],
  },
  daddyk: {
    name: "Daddy K's",
    items: [
      {
        id: 5,
        name: "Noodles & Egg ",
        description: "Hot Nodles & Egg (Boiled or Fried)",
        price: 950,
        minAmount: 950,
        image: "img/noodles.jpg",
      },
      {
        id: 6,
        name: "Fried Rice & Chicken",
        description: "Tasty fried rice with chicken (salad optional)",
        price: 3100,
        minAmount: 3100,
        image: "img/daddykfried.png",
      },
      {
        id: 7,
        name: "Jollof Rice & Chicken",
        description: "Spicy tomato rice with chicken",
        price: 3100,
        minAmount: 3100,
        image: "img/m8.jpg",
      },
      {
        id: 8,
        name: "Fried Plantain & Eggs",
        description: "Ripe plantain & eggs,fried to perfection",
        price: 800,
        minAmount: 800,
        image: "img/dodo.jpg",
      },
      {
        id: 9,
        name: "Chicken & Chips",
        description: "Irish potato chips with chicken",
        price: 5100,
        minAmount: 5100,
        image: "img/chickenchips.png",
      },
      {
        id: 10,
        name: "Moi-Moi",
        description: "Hot steamed beans moi-moi",
        price: 1050,
        minAmount: 1050,
        image: "img/moimoi.png",
      },
      {
        id: 11,
        name: "Fried Fish",
        description: "Spicy fried fish ",
        price: 500,
        minAmount: 500,
        image: "img/fish.jpg",
      },
      {
        id: 12,
        name: "Fried Plantain (per piece)",
        description: "Ripe plantain fried to perfection",
        price: 200,
        minAmount: 200,
        image: "img/plaindodo.png",
      },
    ],
  },
  ifeco: {
    name: "Ifeco's Kitchen",
    items: [
      {
        id: 13,
        name: "Grilled Fish",
        description: "Fresh fish grilled with spices",
        price: 2500,
        minAmount: 2500,
        image: "https://source.unsplash.com/random/300x200/?grilled+fish",
      },
      {
        id: 14,
        name: "Pounded Yam & Egusi",
        description: "Local delicacy with melon soup",
        price: 1800,
        minAmount: 1800,
        image: "https://source.unsplash.com/random/300x200/?pounded+yam",
      },
      {
        id: 15,
        name: "Afang Soup",
        description: "Traditional Calabar vegetable soup",
        price: 2000,
        minAmount: 2000,
        image: "https://source.unsplash.com/random/300x200/?afang+soup",
      },
      {
        id: 16,
        name: "Roasted Yam",
        description: "Yam roasted with palm oil sauce",
        price: 1000,
        minAmount: 1000,
        image: "https://source.unsplash.com/random/300x200/?roasted+yam",
      },
      {
        id: 17,
        name: "Grilled Fish",
        description: "Fresh fish grilled with spices",
        price: 2500,
        minAmount: 2500,
        image: "https://source.unsplash.com/random/300x200/?grilled+fish",
      },
      {
        id: 18,
        name: "Pounded Yam & Egusi",
        description: "Local delicacy with melon soup",
        price: 1800,
        minAmount: 1800,
        image: "https://source.unsplash.com/random/300x200/?pounded+yam",
      },
      {
        id: 19,
        name: "Afang Soup",
        description: "Traditional Calabar vegetable soup",
        price: 2000,
        minAmount: 2000,
        image: "https://source.unsplash.com/random/300x200/?afang+soup",
      },
      {
        id: 20,
        name: "Roasted Yam",
        description: "Yam roasted with palm oil sauce",
        price: 1000,
        minAmount: 1000,
        image: "https://source.unsplash.com/random/300x200/?roasted+yam",
      },
    ],
  },
  officepub: {
    name: "Office Pub Kitchen",
    items: [
      {
        id: 21,
        name: "Edikang Ikong",
        description: "Pumpkin leaves and waterleaf soup",
        price: 2200,
        minAmount: 2200,
        image: "https://source.unsplash.com/random/300x200/?edikang+ikong",
      },
      {
        id: 22,
        name: "Fisherman Soup",
        description: "Rich seafood soup",
        price: 3000,
        minAmount: 3000,
        image: "https://source.unsplash.com/random/300x200/?fisherman+soup",
      },
      {
        id: 23,
        name: "White Rice & Stew",
        description: "Local rice with beef stew",
        price: 1500,
        minAmount: 1500,
        image: "https://source.unsplash.com/random/300x200/?rice+stew",
      },
      {
        id: 24,
        name: "Moi Moi",
        description: "Steamed bean pudding",
        price: 700,
        minAmount: 700,
        image: "https://source.unsplash.com/random/300x200/?moi+moi",
      },
      {
        id: 25,
        name: "Edikang Ikong",
        description: "Pumpkin leaves and waterleaf soup",
        price: 2200,
        minAmount: 2200,
        image: "https://source.unsplash.com/random/300x200/?edikang+ikong",
      },
      {
        id: 26,
        name: "Fisherman Soup",
        description: "Rich seafood soup",
        price: 3000,
        minAmount: 3000,
        image: "https://source.unsplash.com/random/300x200/?fisherman+soup",
      },
      {
        id: 27,
        name: "White Rice & Stew",
        description: "Local rice with beef stew",
        price: 1500,
        minAmount: 1500,
        image: "https://source.unsplash.com/random/300x200/?rice+stew",
      },
      {
        id: 28,
        name: "Moi Moi",
        description: "Steamed bean pudding",
        price: 700,
        minAmount: 700,
        image: "https://source.unsplash.com/random/300x200/?moi+moi",
      },
    ],
  },
  karris: {
    name: "Karris Hotpot",
    items: [
      {
        id: 29,
        name: "Nkwobi",
        description: "Spicy cow foot delicacy",
        price: 2500,
        minAmount: 2500,
        image: "https://source.unsplash.com/random/300x200/?nkwobi",
      },
      {
        id: 30,
        name: "Isi Ewu",
        description: "Spicy goat head",
        price: 2800,
        minAmount: 2800,
        image: "https://source.unsplash.com/random/300x200/?isi+ewu",
      },
      {
        id: 31,
        name: "Abak Atama",
        description: "Palm fruit soup with atama leaves",
        price: 2000,
        minAmount: 2000,
        image: "https://source.unsplash.com/random/300x200/?abak+atama",
      },
      {
        id: 32,
        name: "Ukwa",
        description: "Breadfruit porridge",
        price: 1500,
        minAmount: 1500,
        image: "https://source.unsplash.com/random/300x200/?ukwa",
      },
      {
        id: 33,
        name: "Nkwobi",
        description: "Spicy cow foot delicacy",
        price: 2500,
        minAmount: 2500,
        image: "https://source.unsplash.com/random/300x200/?nkwobi",
      },
      {
        id: 34,
        name: "Isi Ewu",
        description: "Spicy goat head",
        price: 2800,
        minAmount: 2800,
        image: "https://source.unsplash.com/random/300x200/?isi+ewu",
      },
      {
        id: 35,
        name: "Abak Atama",
        description: "Palm fruit soup with atama leaves",
        price: 2000,
        minAmount: 2000,
        image: "https://source.unsplash.com/random/300x200/?abak+atama",
      },
      {
        id: 36,
        name: "Ukwa",
        description: "Breadfruit porridge",
        price: 1500,
        minAmount: 1500,
        image: "https://source.unsplash.com/random/300x200/?ukwa",
      },
    ],
  },
};

// Cart state and constants
let cart = [];
const serviceFee = 300;
const deliveryFee = 500;
// EmailJS configuration
const EMAILJS_SERVICE_ID = "service_2lly29s";
const EMAILJS_TEMPLATE_ID = "template_uwphwco";
const RESTAURANT_EMAIL = "bennybeshel@gmail.com";

// DOM elements
const cartPreview = document.getElementById("cartPreview");
const cartCount = document.getElementById("cartCount");
const cartTotal = document.getElementById("cartTotal");
const flashMessage = document.getElementById("flashMessage");
const cartModal = document.getElementById("cartModal");
const cartItems = document.getElementById("cartItems");
const subtotal = document.getElementById("subtotal");
const grandTotal = document.getElementById("grandTotal");
const checkoutModal = document.getElementById("checkoutModal");
const deliveryForm = document.getElementById("deliveryForm");

// Carousel elements
const carouselInner = document.querySelector(".carousel-inner");
const carouselItems = document.querySelectorAll(".carousel-item");
const indicators = document.querySelectorAll(".indicator");
let currentSlide = 0;
let slideInterval;

// Initialize the application
document.addEventListener("DOMContentLoaded", function () {
  // Load menu items for all vendors
  loadMenuItems();
  // Load featured items
  loadFeaturedItems();
  // Update cart preview UI
  updateCartPreview();
  // Load saved cart from localStorage
  try {
    const savedCart = localStorage.getItem("nightBitesCart");
    if (savedCart) {
      cart = JSON.parse(savedCart);
      updateCartPreview();
    }
  } catch (error) {
    console.error("Error loading cart from localStorage:", error);
    showFlashMessage("Failed to load cart. Please try again.");
  }
  // Start carousel animation
  startCarousel();
  // Attach scroll event listener for navbar effect
  window.addEventListener("scroll", handleScroll);
});

// Menu Functions
// Load and render menu items for all vendors
function loadMenuItems() {
  for (const vendorId in vendors) {
    if (vendorId === "featured") continue; // Skip featured vendor for menu items
    const vendor = vendors[vendorId];
    const menuContainer = document.querySelector(`#${vendorId} .menu-items`);

    vendor.items.forEach((item) => {
      const menuItem = document.createElement("div");
      menuItem.className = "menu-item";
      menuItem.innerHTML = `
        <img src="${item.image}" alt="${item.name}">
        <div class="menu-item-content">
            <h3>${item.name}</h3>
            <p>${item.description}</p>
            <span class="price">From ₦${item.minAmount.toLocaleString()}</span>
            <button class="add-to-cart" data-id="${
              item.id
            }" data-vendor="${vendorId}">Add to Cart</button>
        </div>
      `;
      menuContainer.appendChild(menuItem);
    });
  }

  // Attach event listeners to add-to-cart buttons
  document.querySelectorAll(".add-to-cart").forEach((button) => {
    button.addEventListener("click", addToCart);
  });
}

// Load and render featured items
function loadFeaturedItems() {
  const featuredContainer = document.querySelector(".featured-items");
  if (!featuredContainer) {
    console.error("Featured items container not found");
    return;
  }

  const vendor = vendors.featured;
  featuredContainer.innerHTML = ""; // Clear any existing content

  vendor.items.forEach((item) => {
    const featuredItem = document.createElement("div");
    featuredItem.className = "featured-item";
    featuredItem.innerHTML = `
      <img src="${item.image}" alt="${item.name}">
      <div class="featured-info">
        <h3>${item.name}</h3>
        <p>${item.description}</p>
        <div class="featured-footer">
          <span class="price">₦${item.price.toLocaleString()}</span>
          <button class="add-to-cart" data-id="${
            item.id
          }" data-vendor="featured">Add to Cart</button>
        </div>
      </div>
    `;
    featuredContainer.appendChild(featuredItem);
  });

  // Attach event listeners to add-to-cart buttons
  document
    .querySelectorAll(".featured-items .add-to-cart")
    .forEach((button) => {
      button.addEventListener("click", addToCart);
    });
}

// Cart Functions
// Add an item to the cart
function addToCart(e) {
  const button = e.target;
  const itemId = parseInt(button.getAttribute("data-id"));
  const vendorId = button.getAttribute("data-vendor");

  const vendor = vendors[vendorId];
  const item = vendor.items.find((i) => i.id === itemId);

  const existingItem = cart.find(
    (i) => i.id === item.id && i.vendor === vendorId
  );

  if (existingItem) {
    existingItem.quantity += 1;
    existingItem.amount = Math.max(existingItem.amount, existingItem.minAmount);
  } else {
    cart.push({
      id: item.id,
      name: item.name,
      vendor: vendorId,
      vendorName: vendor.name,
      price: item.price,
      minAmount: item.minAmount,
      amount: item.minAmount,
      quantity: 1,
    });
  }

  // Save cart to localStorage with error handling
  try {
    localStorage.setItem("nightBitesCart", JSON.stringify(cart));
  } catch (error) {
    console.error("Error saving cart to localStorage:", error);
    showFlashMessage("Failed to save cart. Please try again.");
  }

  updateCartPreview();
  showFlashMessage(`${item.name} added to cart`);
}

// Update cart preview UI
function updateCartPreview() {
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalAmount = cart.reduce(
    (sum, item) => sum + item.amount * item.quantity,
    0
  );

  cartCount.textContent = totalItems;
  cartTotal.textContent = totalAmount.toLocaleString();
}

// Render cart items in the modal
function renderCart() {
  if (cart.length === 0) {
    cartItems.innerHTML = "<p>Your cart is empty</p>";
    subtotal.textContent = "0";
    grandTotal.textContent = (serviceFee + deliveryFee).toLocaleString();
    return;
  }

  let itemsHTML = "";
  let total = 0;

  cart.forEach((item, index) => {
    total += item.amount * item.quantity;
    itemsHTML += `
      <div class="cart-item">
          <div class="cart-item-info">
              <h4>${item.name}</h4>
              <p>${item.vendorName}</p>
              <p>₦${item.amount.toLocaleString()} per plate (min: ₦${item.minAmount.toLocaleString()})</p>
          </div>
          <div class="cart-item-controls">
              <input type="number" min="1" value="${item.quantity}" 
                  onchange="updateCartItem(${index}, this.value, 'quantity')">
              <input type="number" min="${item.minAmount}" value="${
      item.amount
    }" 
                  onchange="updateCartItem(${index}, this.value, 'amount')">
              <span class="remove-item" onclick="removeFromCart(${index})">Remove</span>
          </div>
      </div>
    `;
  });

  cartItems.innerHTML = itemsHTML;
  subtotal.textContent = total.toLocaleString();
  grandTotal.textContent = (total + serviceFee + deliveryFee).toLocaleString();
}

// Update cart item quantity or amount
function updateCartItem(index, value, type) {
  const item = cart[index];

  if (type === "quantity") {
    item.quantity = parseInt(value) || 1;
  } else if (type === "amount") {
    const amount = parseFloat(value) || item.minAmount;
    item.amount = Math.max(amount, item.minAmount);
  }

  // Save cart to localStorage with error handling
  try {
    localStorage.setItem("nightBitesCart", JSON.stringify(cart));
  } catch (error) {
    console.error("Error updating cart in localStorage:", error);
    showFlashMessage("Failed to update cart. Please try again.");
  }

  renderCart();
  updateCartPreview();
}

// Remove an item from the cart
function removeFromCart(index) {
  cart.splice(index, 1);

  // Save cart to localStorage with error handling
  try {
    localStorage.setItem("nightBitesCart", JSON.stringify(cart));
  } catch (error) {
    console.error("Error removing item from localStorage:", error);
    showFlashMessage("Failed to remove item from cart. Please try again.");
  }

  renderCart();
  updateCartPreview();
}

// UI Functions
// Show flash message for user feedback
function showFlashMessage(message) {
  flashMessage.textContent = message;
  flashMessage.style.display = "block";

  setTimeout(() => {
    flashMessage.style.animation = "fadeOut 0.3s";
    setTimeout(() => {
      flashMessage.style.display = "none";
      flashMessage.style.animation = "fadeIn 0.3s";
    }, 300);
  }, 2000);
}

// Toggle cart modal visibility
function toggleCart() {
  if (cartModal.style.display === "block") {
    cartModal.style.display = "none";
  } else {
    renderCart();
    cartModal.style.display = "block";
  }
}

// Proceed to checkout
function checkout() {
  if (cart.length === 0) {
    alert("Your cart is empty");
    return;
  }

  cartModal.style.display = "none";
  checkoutModal.style.display = "block";
}

// Close checkout modal
function closeCheckout() {
  checkoutModal.style.display = "none";
}

// Show confirmation modal with customer phone number
function showConfirmationModal(phone) {
  const confirmationModal = document.getElementById("confirmationModal");
  if (!confirmationModal) {
    console.error("Confirmation modal element not found");
    showFlashMessage("Order placed, but confirmation modal not available.");
    return;
  }

  // Update modal content with provided HTML structure
  confirmationModal.innerHTML = `
    <div class="modal-content" style="max-width: 400px">
      <span class="close" onclick="closeConfirmationModal()">×</span>
      <div class="modal-header">
        <h3>Order Confirmed! 🎉</h3>
      </div>
      <div class="modal-body">
        <i class="fas fa-check-circle" style="font-size: 48px; color: #4caf50; margin-bottom: 20px"></i>
        <p>We'll call you at <strong>${phone}</strong> to confirm your order.</p>
        <p>Thank you for choosing Calabar Night Bites!</p>
      </div>
      <div class="modal-footer">
        <button class="btn-confirm" onclick="closeConfirmationModal()">Close</button>
      </div>
    </div>
  `;

  // Display modal
  confirmationModal.style.display = "flex";

  // Add event listeners for overlay click and Esc key
  confirmationModal.addEventListener("click", function handleOverlayClick(e) {
    if (e.target === confirmationModal) {
      closeConfirmationModal();
      confirmationModal.removeEventListener("click", handleOverlayClick);
    }
  });

  document.addEventListener("keydown", function handleEscKey(e) {
    if (e.key === "Escape" && confirmationModal.style.display === "flex") {
      closeConfirmationModal();
      document.removeEventListener("keydown", handleEscKey);
    }
  });
}

// Carousel Functions
// Start the carousel with automatic sliding
function startCarousel() {
  slideInterval = setInterval(nextSlide, 5000);
}

// Move to the next slide
function nextSlide() {
  goToSlide((currentSlide + 1) % carouselItems.length);
}

// Move to the previous slide
function prevSlide() {
  goToSlide((currentSlide - 1 + carouselItems.length) % carouselItems.length);
}

// Go to a specific slide
function goToSlide(n) {
  carouselItems[currentSlide].classList.remove("active");
  indicators[currentSlide].classList.remove("active");

  currentSlide = n;

  carouselItems[currentSlide].classList.add("active");
  indicators[currentSlide].classList.add("active");
  carouselInner.style.transform = `translateX(-${currentSlide * 100}%)`;

  // Reset timer when manually changing slides
  clearInterval(slideInterval);
  startCarousel();
}

// Move slide based on direction
function moveSlide(n) {
  if (n > 0) {
    nextSlide();
  } else {
    prevSlide();
  }
}

// Navbar scroll effect
function handleScroll() {
  if (window.scrollY > 50) {
    document.querySelector(".navbar").classList.add("scrolled");
  } else {
    document.querySelector(".navbar").classList.remove("scrolled");
  }
}

// Order Submission Functions
// Send order email using EmailJS form-based submission
function sendMail(event) {
  event.preventDefault(); // Prevent default form submission

  // Get submit button for UI feedback
  const submitBtn = document.querySelector(
    '#deliveryForm button[type="submit"]'
  );
  submitBtn.disabled = true;
  submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Processing...';

  // Validate form inputs
  const name = document.getElementById("name").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const address = document.getElementById("address").value.trim();
  const tAndC = document.getElementById("t&c").checked;

  if (!name || !phone || !address || !tAndC) {
    showFlashMessage(
      "Please fill in all required fields and accept Terms & Conditions."
    );
    submitBtn.disabled = false;
    submitBtn.textContent = "Place Order";
    return;
  }

  // Basic phone number validation (simple regex for Nigerian numbers)
  const phoneRegex = /^(\+234|0)[789]\d{9}$/;
  if (!phoneRegex.test(phone)) {
    showFlashMessage("Please enter a valid Nigerian phone number.");
    submitBtn.disabled = false;
    submitBtn.textContent = "Place Order";
    return;
  }

  // Sanitize inputs to prevent injection in email template
  const sanitize = (input) => {
    if (typeof input !== "string") return input;
    return input.replace(
      /[<>"'&]/g,
      (match) =>
        ({
          "<": "<",
          ">": ">",
          '"': '"',
          "'": "&#39;",
          "&": "&",
        }[match])
    );
  };

  // Generate order ID
  const orderId = `CNB-${Date.now().toString().slice(-4)}`;

  // Construct order data
  const order = {
    customer: {
      name,
      phone,
      address,
      instructions: document.getElementById("instructions").value.trim(),
    },
    items: [...cart],
    subtotal: cart.reduce((sum, item) => sum + item.amount * item.quantity, 0),
    serviceFee: serviceFee,
    deliveryFee: deliveryFee,
    total:
      cart.reduce((sum, item) => sum + item.amount * item.quantity, 0) +
      serviceFee +
      deliveryFee,
    date: new Date().toLocaleString("en-NG", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    }),
  };

  // Format items as HTML table rows for EmailJS template
  const itemsHtml = order.items
    .map(
      (item) => `
    <tr>
      <td>${sanitize(`${item.name} (${item.vendorName})`)}</td>
      <td>${item.quantity}x</td>
      <td>₦${item.amount.toLocaleString()}</td>
      <td>₦${(item.amount * item.quantity).toLocaleString()}</td>
    </tr>
  `
    )
    .join("");

  // Update hidden inputs with order data
  document.querySelector('#deliveryForm input[name="items_html"]').value =
    itemsHtml;
  document.querySelector('#deliveryForm input[name="subtotal"]').value =
    order.subtotal.toLocaleString();
  document.querySelector('#deliveryForm input[name="service_fee"]').value =
    order.serviceFee.toLocaleString();
  document.querySelector('#deliveryForm input[name="delivery_fee"]').value =
    order.deliveryFee.toLocaleString();
  document.querySelector('#deliveryForm input[name="total"]').value =
    order.total.toLocaleString();
  document.querySelector('#deliveryForm input[name="date"]').value = sanitize(
    order.date
  );
  document.querySelector('#deliveryForm input[name="order_id"]').value =
    orderId;
  document.querySelector('#deliveryForm input[name="to_email"]').value =
    RESTAURANT_EMAIL;

  // Send form data via EmailJS
  emailjs
    .sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, "#deliveryForm")
    .then(
      (result) => {
        console.log("EmailJS success:", result);
        showFlashMessage("Order placed successfully!");
        showConfirmationModal(order.customer.phone);
        cart = [];
        try {
          localStorage.removeItem("nightBitesCart");
        } catch (error) {
          console.error("Error clearing cart from localStorage:", error);
          showFlashMessage("Failed to clear cart. Please try again.");
        }
        updateCartPreview();
        closeCheckout();
        deliveryForm.reset();
      },
      (error) => {
        console.error("Error submitting order:", error);
        showFlashMessage(
          "Failed to submit order. Please check your connection or contact support."
        );
        alert(`Order failed. Please call 080-XXX-XXXX with ID: ${orderId}`);
      }
    )
    .finally(() => {
      submitBtn.disabled = false;
      submitBtn.textContent = "Place Order";
    });
}

// Tab Functions
// Open a specific tab
function openTab(evt, tabName) {
  const tabContents = document.getElementsByClassName("tab-content");
  for (let i = 0; i < tabContents.length; i++) {
    tabContents[i].style.display = "none";
  }

  const tabButtons = document.getElementsByClassName("tab-button");
  for (let i = 0; i < tabButtons.length; i++) {
    tabButtons[i].className = tabButtons[i].className.replace(" active", "");
  }

  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";
}

// Handle legal tab clicks
document.querySelectorAll(".legal-tab").forEach((tab) => {
  tab.addEventListener("click", () => {
    document
      .querySelectorAll(".legal-tab, .legal-tab-content")
      .forEach((el) => {
        el.classList.remove("active");
      });
    tab.classList.add("active");
    const tabId = tab.getAttribute("data-tab");
    document.getElementById(tabId).classList.add("active");
  });
});

// Close confirmation modal
window.closeConfirmationModal = function () {
  document.getElementById("confirmationModal").style.display = "none";
};
