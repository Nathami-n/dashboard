'use client';
import { CardWrapper } from "@/components/auth/CardWrapper";
import {
    Form,
    FormField,
    FormLabel,
    FormControl,
    FormItem,
    FormMessage

}  from "@/components/ui/form";
import {useForm} from 'react-hook-form';
import {RegisterSchema} from '@/schema';
import {useTransition, useState} from 'react';
import {z} from 'zod';
import {registerUserWithEmailAndPassword} from '@/firebase/fireconfig';
import {zodResolver} from '@hookform/resolvers/zod';
import { Input } from "@/components/ui/input";
import {FormError} from '@/components/auth/FormError';
import {FormSuccess} from '@/components/auth/FormSuccess';
import {Button} from '@/components/ui/button';

const RegisterForm = () => {
    const [isPending, startTransition] = useTransition();
    const [error, setError] = useState<string | undefined>('');
    const [success, setSuccess] = useState<string |undefined>('');
    const form = useForm({
        resolver: zodResolver(RegisterSchema),
        defaultValues: {
            email: "",
            password: "",
        }
    });
    const onSubmit = async (data: z.infer<typeof RegisterSchema>) => {
            startTransition(async () => {
                const userData = await registerUserWithEmailAndPassword(data);
                const {success, error} = userData.response;
                if(!success.state && error !== null) {
                    setError(error);
                    return;
                };
                console.log(success.payload);
                
            })
    }
    return (
        <CardWrapper
        headerLabel="Create An account"
        backButtonHref="/auth/login"
        backButtonLabel="Already have an account? Login now"
        showSocial
        >
            <Form {...form}>
                <form
                onSubmit = {form.handleSubmit(onSubmit)}
                >
                    <div className="gap-y-2">
                        <FormField
                        control={form.control}
                        name="email"
                        render={({field})=>(
                            <FormItem>
                                <FormLabel>
                                    Email
                                </FormLabel>
                                <FormControl>
                                    <Input
                                    disabled={isPending}
                                    type="Email"
                                    {...field}
                                    placeholder="johndoe@gmail.com"
                                    />
                                </FormControl>
                                <FormMessage/>
                            </FormItem>
                        )}
                        />
                        <FormField
                        control={form.control}
                        name="password"
                        render={({field})=>(
                            <FormItem>
                                <FormLabel>
                                    Password
                                </FormLabel>
                                <FormControl>
                                    <Input
                                    disabled={isPending}
                                    type="password"
                                    {...field}
                                    placeholder="********"
                                    />
                                </FormControl>
                                <FormMessage/>
                            </FormItem>
                        )}
                        />
                    </div>
                    <FormError message={error as string}/>
                    <FormSuccess message={error as string}/>
                    <Button
                    disabled={isPending}
                    type="submit"
                    className="w-full mt-2"
                    >
                    Create an account
                    </Button>
                </form>
            </Form>

        </CardWrapper>
    )
}

export default RegisterForm;