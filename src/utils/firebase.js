import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithPopup,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAoFIZE4ewbZR-jfWDV61CWjBiRhmYwz7Q",
  authDomain: "retink-922c0.firebaseapp.com",
  projectId: "retink-922c0",
  storageBucket: "retink-922c0.appspot.com",
  messagingSenderId: "59378479286",
  appId: "1:59378479286:web:a983cb35d8d40fab9db617",
  measurementId: "G-L1Y3B5YVPH",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//sign in with google popup
const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleProvider);
export const db = getFirestore();

export const createUserDocumentFromAuth = async (
  userAuth,
  additionalInformation = {}
) => {
  if (!userAuth) return;

  const userDocRef = doc(db, "users", userAuth.uid);
  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...(additionalInformation = {}),
      });
    } catch (error) {
      console.log("Error creating a user", error.message);
    }
  }
  return userDocRef;
};

//create user and password
export const createAuthUserWithEmailAndPassword = async (
  email,
  password,
  displayName
) => {
  if (!email || !password) return;
  return await createUserWithEmailAndPassword(
    auth,
    email,
    password,
    displayName
  );
};

//sign in with email and password
export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return await signInWithEmailAndPassword(auth, email, password);
};
//signout
export const signOutUser = async () => signOut(auth);

//Observable Listener
export const onAuthStateChangedListener = (callback) =>
  onAuthStateChanged(auth, callback);

//
