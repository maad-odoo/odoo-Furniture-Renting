// FirebaseContext.js
import React, { createContext, useContext, useEffect, useState } from "react";
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";
import { getFirestore, doc, setDoc, getDoc, collection, getDocs } from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { v4 as uuidv4 } from "uuid";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBMHscNe7v9QJinngMSPfW8fPDydHlwICI",
  authDomain: "furniture-renting-91dac.firebaseapp.com",
  databaseURL: "https://furniture-renting-91dac-default-rtdb.firebaseio.com",
  projectId: "furniture-renting-91dac",
  storageBucket: "furniture-renting-91dac.appspot.com",
  messagingSenderId: "807829589402",
  appId: "1:807829589402:web:efbf4a868fdbc4c449fe23",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

// Create context
const FireBaseContext = createContext(null);
export const useFireBase = () => useContext(FireBaseContext);

export const FireBaseProvider = (props) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
    return () => unsubscribe();
  }, []);

  // Registration
  const handleRegistration = async (email,password) => {
    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      await setDoc(doc(db, "users", res.user.uid), {
        email,
        id: res.user.uid,
        cart: [],
      });
    } catch (err) {
      console.log(err.message);
    }
  };

  // Login
  const handleLogin = async (email, password) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log("You are logged in");
    } catch (error) {
      console.log(error);
    }
  };

  // Logout
  const handleLogout = async () => {
    try {
      await signOut(auth);
      console.log("You have logged out");
    } catch (error) {
      console.log(error.message);
    }
  };

  // Upload image
  const uploadImage = async (file) => {
    const storageRef = ref(storage, `images/${uuidv4()}`);
    await uploadBytes(storageRef, file);
    const url = await getDownloadURL(storageRef);
    return url;
  };

  // Add listing
  const addListing = async (formData, photo) => {
    try {
      const imgUrl = photo.file ? await uploadImage(photo.file) : "";
      await setDoc(doc(db, "Products", uuidv4()), {
        ...formData,
        images: imgUrl,
      });
      // toast.success("Listing added successfully!");
    } catch (err) {
      // toast.error(err.message);
      console.error(err);
    }
  };

  // Fetch product details by ID
  const getProductById = async (id) => {
    try {
      const docRef = doc(db, "Products", id);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        return docSnap.data();
      } else {
        throw new Error("No such document!");
      }
    } catch (error) {
      console.error('Error fetching document:', error);
      throw error;
    }
  };

  // Fetch all products
  const getAllProducts = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "Products"));
      return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    } catch (error) {
      console.error("Error fetching products: ", error);
      throw error;
    }
  };

  const isLoggedIn = user !== null;

  return (
    <FireBaseContext.Provider
      value={{
        isLoggedIn,
        handleLogin,
        handleRegistration,
        handleLogout,
        addListing,
        uploadImage,
        getProductById,
        getAllProducts,
      }}
    >
      {props.children}
    </FireBaseContext.Provider>
  );
};
