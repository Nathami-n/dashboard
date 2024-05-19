
import { initializeApp } from "firebase/app";
import {getAuth, createUserWithEmailAndPassword} from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCrpklGW2iY78m4k0_cN_fea0KZ2bYHW_0",
  authDomain: "studentme-e495e.firebaseapp.com",
  projectId: "studentme-e495e",
  storageBucket: "studentme-e495e.appspot.com",
  messagingSenderId: "656082617048",
  appId: "1:656082617048:web:1b02261038c938accb4dad"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export const registerUserWithEmailAndPassword = async (data: {
    email: string,
    password: string
}) => {
    try {
        const userCredentials = await createUserWithEmailAndPassword(
            auth,
            data.email,
            data.password
        );
        if(!userCredentials) return null;
        return userCredentials.user
    } catch (error) {
        console.error(error);
        return null;
    }
};

export const loginUserWithEmailAndPassword = async (data: {
    email: string,
    password: string
}) => {
    try {

    } catch (error) {
        console.error(error);
        return null;
    }
}