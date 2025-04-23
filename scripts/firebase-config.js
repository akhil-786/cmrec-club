import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-database.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-storage.js";

const firebaseConfig = {
    apiKey: "AIzaSyByiV9J9UFJyq4YZ7lsx4UOsb91K255HZE",
    authDomain: "cmrec-nexus.firebaseapp.com",
    projectId: "cmrec-nexus",
    storageBucket: "cmrec-nexus.firebasestorage.app",
    messagingSenderId: "1037530313729",
    appId: "1:1037530313729:web:8c02807518980435517c00",
    measurementId: "G-DKSXWND59G"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const database = getDatabase(app);
export const storage = getStorage(app);
