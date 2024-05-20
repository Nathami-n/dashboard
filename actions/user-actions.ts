
import {auth} from '@/config/fireconfig';
import * as z from 'zod';
import {RegisterSchema, LoginSchema} from '@/schema';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';




export const registerUser = async (values: z.infer<typeof RegisterSchema>) => {
    const validFields = RegisterSchema.safeParse(values);
    if(!validFields.success) {
        return {
            success: false,
            payload: {
                data: null,
                err: "Check inputed values"
            }
        }
    };

    const {
        email, 
        password
    } = validFields.data;

    try {
        const userDetails = await createUserWithEmailAndPassword(auth, email, password);
        return {
            success: true,
            payload: {
                data: userDetails.user,
                err: null,
            }
        }
    } catch (error: any) {
        if(error.code === 'auth/email-already-in-use') {
            return {
                success: false,
                payload: {
                    data: null,
                    err: "Email already registered"
                }
            }
        } else {
            return {
                success: false,
                payload: {
                    data: null,
                    err: error.message
                }
            }
        }
    }
}

export const loginUser = async (values: z.infer<typeof RegisterSchema>) => {
    const validFields = RegisterSchema.safeParse(values);
    if(!validFields.success) {
        return {
            success: false,
            payload: {
                data: null,
                err: "Check inputed values"
            }
        }
    };

    const {
        email, 
        password
    } = validFields.data;

    try {
        const userDetails = await signInWithEmailAndPassword(auth, email, password);
        return {
            success: true,
            payload: {
                data: userDetails.user,
                err: null,
            }
        }
    } catch (error: any) {
            return {
                success: false,
                payload: {
                    data: null,
                    err: error.message
                }
            }
        }
    }