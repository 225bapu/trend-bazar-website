// ===== Cart System (Basic) =====
let cart = [];

function addToCart(product) {
  cart.push(product);
  alert(product + " added to cart! 🛒");
  updateCartIcon();
}

function updateCartIcon() {
  document.querySelector(".cart").textContent = "🛒 Cart (" + cart.length + ")";
}

// ===== Simple Search Filter =====
function searchProducts() {
  let input = document.getElementById("searchBox").value.toLowerCase();
  let products = document.querySelectorAll(".product");

  products.forEach(p => {
    let name = p.querySelector("h3").textContent.toLowerCase();
    p.style.display = name.includes(input) ? "block" : "none";
  });
}

// ===== Chatbot =====
document.addEventListener("DOMContentLoaded", () => {
  const chatbotBtn = document.createElement("button");
  chatbotBtn.id = "chatbot-btn";
  chatbotBtn.textContent = "💬";
  document.body.appendChild(chatbotBtn);

  const chatWindow = document.createElement("div");
  chatWindow.id = "chat-window";
  chatWindow.innerHTML = "<p><b>AI Assistant:</b> Hi! Need help?</p>";
  document.body.appendChild(chatWindow);

  chatbotBtn.addEventListener("click", () => {
    chatWindow.style.display = chatWindow.style.display === "block" ? "none" : "block";
  });
});
