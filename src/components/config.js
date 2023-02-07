import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCEpyQ5d9TvTxoyIzL_1u7QSvsEsQ7Dz54",
    authDomain: "login--byesa.firebaseapp.com",
    projectId: "login--byesa",
    storageBucket: "login--byesa.appspot.com",
    messagingSenderId: "223475749271",
    appId: "1:223475749271:web:5637d1fc387a8ec45474d2",
    measurementId: "G-587TT2DX0J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);