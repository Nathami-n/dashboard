'use client';
import { CardWrapper } from "@/components/auth/card-wrapper";
import {
    Form,
    FormField,
    FormLabel,
    FormControl,
    FormItem,
    FormMessage

} from "@/components/ui/form";
import { useForm } from 'react-hook-form';
import { LoginSchema } from '@/schema';
import { useTransition, useState } from 'react';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Input } from "@/components/ui/input";
import { FormError } from '@/components/auth/form-error';
import { FormSuccess } from '@/components/auth/form-success';
import { Button } from '@/components/ui/button';

const LoginForm = () => {
    const [isPending, startTransition] = useTransition();
    const [error, setError] = useState<string | undefined>('');
    const [success, setSuccess] = useState<string | undefined>('');
    const form = useForm({
        resolver: zodResolver(LoginSchema),
        defaultValues: {
            email: "",
            password: "",

        }
    });
    const onSubmit = async (data: z.infer<typeof LoginSchema>) => {
        console.log("Testing the login page")
    }
    return (
        <CardWrapper
            headerLabel="Login to Dashboard"
            backButtonHref="/auth/register"
            backButtonLabel="Don't have an account? Register now"
            showSocial
        >
            <Form {...form}>
                <form
                    onSubmit={form.handleSubmit(onSubmit)}
                >
                    <div className="gap-y-2">
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
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
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="password"
                            render={({ field }) => (
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
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>
                    <FormError message={error as string} />
                    <FormSuccess message={error as string} />
                    <Button
                        disabled={isPending}
                        type="submit"
                        className="w-full mt-2"
                    >
                        Login now
                    </Button>
                </form>
            </Form>

        </CardWrapper>
    )
}

export default LoginForm;