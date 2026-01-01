import { 
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut,
 } from "firebase/auth";
import { auth, googleProvider } from "./firebase";

// Register - Kullanıcı Kayıt;
export const register = (email, password)  =>
    createUserWithEmailAndPassword(auth, email, password);

// Login - Kullanıcı Giriş;
export const login = (email, password) =>
    signInWithEmailAndPassword(auth, email, password);

// Login GoogleAccount - Kullanıcı Giriş Google;
export const loginWithGoogle = () =>
    signInWithPopup(auth, googleProvider);

// Logout - Kullanıcı Çıkış;
export const logout = () => signOut(auth);