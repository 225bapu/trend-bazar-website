// ===== Firebase SDK v9+ Modular =====
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import { getFirestore, collection, addDoc, getDocs, doc, deleteDoc, setDoc } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore.js";

// ===== Your Firebase config =====
const firebaseConfig = {
  apiKey: "AIzaSyB_OWHIrjBOkunmFMyUGgvXjOstZj8BhNQ",
  authDomain: "trendbazaar-e8332.firebaseapp.com",
  projectId: "trendbazaar-e8332",
  storageBucket: "trendbazaar-e8332.appspot.com",
  messagingSenderId: "1234567890",
  appId: "1:926227745803:web:f08e4395e627a2568b0b0e"
};

// ===== Initialize Firebase =====
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// ===== Products =====
export async function getProducts() {
  const productsCol = collection(db, "products");
  const productsSnapshot = await getDocs(productsCol);
  const products = productsSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  return products;
}

// ===== Cart =====
export async function addToCart(product) {
  await addDoc(collection(db, "cart"), product);
}

export async function getCart() {
  const cartCol = collection(db, "cart");
  const cartSnapshot = await getDocs(cartCol);
  const cart = cartSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  return cart;
}

export async function removeFromCart(cartId) {
  await deleteDoc(doc(db, "cart", cartId));
}

// ===== Orders =====
export async function placeOrder(order) {
  await addDoc(collection(db, "orders"), order);
}

export async function getOrders() {
  const ordersCol = collection(db, "orders");
  const ordersSnapshot = await getDocs(ordersCol);
  const orders = ordersSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  return orders;
}
