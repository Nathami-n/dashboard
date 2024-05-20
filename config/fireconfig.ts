
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
  projectId: "studentme-e495e",
  storageBucket: "studentme-e495e.appspot.com",
  messagingSenderId: "656082617048",
  appId: "1:656082617048:web:1b02261038c938accb4dad"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);



// export const loginUserWithEmailAndPassword = async (data: {
//     email: string,
//     password: string
// }) => {
//     try {
//         const userCredentials = await signInWithEmailAndPassword(
//             auth,
//             data.email,
//             data.password
//         );
//         if(!userCredentials) return {success: false, user: null};
//         return {success: true, user: userCredentials.user};
//     } catch (error) {
//         console.error(error);
//         return;
//     }
// }