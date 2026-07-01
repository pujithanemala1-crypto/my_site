import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyAppcciffTQ_pxjvQYY6pr-BrVoy_TpiHs",
    authDomain: "path-finder-edu-guide.firebaseapp.com",
    projectId: "path-finder-edu-guide",
    storageBucket: "path-finder-edu-guide.firebasestorage.app",
    messagingSenderId: "75067873319",
    appId: "1:75067873319:web:8a7f3f539861cc614b9602",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);