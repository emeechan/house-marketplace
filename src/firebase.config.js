import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'

// Your web app's Firebase configuration

const firebaseConfig = {

  apiKey: "AIzaSyBECFNo79hq5mN8TI3l2d8ICiPKZnYGJ74",

  authDomain: "house-marketplace-app-d21aa.firebaseapp.com",

  projectId: "house-marketplace-app-d21aa",

  storageBucket: "house-marketplace-app-d21aa.appspot.com",

  messagingSenderId: "972323743368",

  appId: "1:972323743368:web:ae0cb91e705eac2f34613d"

};


// Initialize Firebase

initializeApp(firebaseConfig);
export const dc = getFirestore()