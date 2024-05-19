'use server';
import { initializeApp } from "firebase/app";
import * as z from 'zod';
import {RegisterSchema, LoginSchema} from '@/schema';
import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword} from 'firebase/auth';

const firebaseConfig = {
  apiKey: process.env.FIREBASE_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: "studentme-e495e",
  storageBucket: "studentme-e495e.appspot.com",
  messagingSenderId: "656082617048",
  appId: "1:656082617048:web:1b02261038c938accb4dad"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export const registerUserWithEmailAndPassword = async (data: z.infer<typeof RegisterSchema>) => {
    const validFields = RegisterSchema.safeParse(data);

    if(!validFields.success) {
        return {
            data: {
                error: "Invalid Credentials",
                success: {
                    state: false,
                    response: undefined,
                    data: null
                }
            }
        }
    };
    const {
        email,
        password
    } = validFields.data;

    //try signing up the user 

    try {
        const userCredentials = await createUserWithEmailAndPassword(auth, email, password);
        if(!userCredentials.)

    } catch(error: any) {
        if(error.code === 'auth/email-already-in-use' ) {
            return {
                data: {
                    error: "Email already registered",
                    success: {
                        state: false,
                        response: undefined,
                        data: null,
                    }
                }
            }
        };

        return {
            data: {
                error: "Something went wrong",
                success: {
                    state: false,
                    response: undefined,
                    data: null,
                }
            }
        }
    };
};

export const loginUserWithEmailAndPassword = async (data: {
    email: string,
    password: string
}) => {
    try {
        const userCredentials = await signInWithEmailAndPassword(
            auth,
            data.email,
            data.password
        );
        if(!userCredentials) return {success: false, user: null};
        return {success: true, user: userCredentials.user};
    } catch (error) {
        console.error(error);
        return;
    }
}