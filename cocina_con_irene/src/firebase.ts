import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAOi1HLtKD_8vkb-kKqLEpKTK0BnZA3XNE",
  authDomain: "cocina-con-irene.firebaseapp.com",
  projectId: "cocina-con-irene",
  storageBucket: "cocina-con-irene.firebasestorage.app",
  messagingSenderId: "899376633823",
  appId: "1:899376633823:web:7663cfe4f76c7ca0c5166a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);