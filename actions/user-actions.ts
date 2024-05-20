"use server";
import {auth} from '@/config/fireconfig';
import * as z from 'zod';
import {RegisterSchema, LoginSchema} from '@/schema';
import { createUserWithEmailAndPassword } from 'firebase/auth';


export const registerUser = async (values: z.infer<typeof RegisterSchema>) => {
    const validFields = RegisterSchema.safeParse(values);

    if(!validFields.success) {
        return {
            response: {
                error: "Invalid Credentials",
                success: {
                    state: false,
                    payload: null
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
        if(!userCredentials) { 
            return { 
            response: { 
            error: "Something went wrong", 
            success: {
                 state: false,
                 payload: null
                }
            }
        }
    };
        return {
            response: {
                 error: null, 
                 success: { 
                    state: true, 
                    payload: userCredentials.user
                }
            }
        };

    } catch(error: any) {
        if( ) {
            
        };
}
}