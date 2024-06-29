
import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";
import { getFirestore} from "firebase/firestore";
import {getStorage} from "firebase/storage";

const firebaseConfig = { 
  apiKey:import.meta.env.VITE_API_KEY,
  authDomain: "furniture-renting-91dac.firebaseapp.com",
  databaseURL: "https://furniture-renting-91dac-default-rtdb.firebaseio.com",
  projectId: "furniture-renting-91dac",
  storageBucket: "furniture-renting-91dac.appspot.com",
  messagingSenderId: "807829589402",
  appId: "1:807829589402:web:efbf4a868fdbc4c449fe23"
};


const app = initializeApp(firebaseConfig);


export const auth = getAuth();
export const db = getFirestore(); 
export const storage =getStorage() ;