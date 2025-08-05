// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
    apiKey: "AIzaSyAaHEVxZejJfyWk6ze24--JBnzT9wr43es",
    authDomain: "moiblog-ce9c8.firebaseapp.com",
    projectId: "moiblog-ce9c8",
    storageBucket: "moiblog-ce9c8.firebasestorage.app",
    messagingSenderId: "25162231586",
    appId: "1:25162231586:web:52369353191d2fa4527f7b",
    measurementId: "G-V0PM3K7ZT0"
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);
export const storage = getStorage(app);
