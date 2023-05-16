import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firebase";
const firebaseConfig = {
    apiKey: "AIzaSyAQyG9P9JpasQhx8yTimMKj8rls3O5a59E",
    authDomain: "miniblog-556aa.firebaseapp.com",
    projectId: "miniblog-556aa",
    storageBucket: "miniblog-556aa.appspot.com",
    messagingSenderId: "95371028915",
    appId: "1:95371028915:web:5b2ff2e9050c03b77043c6"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };