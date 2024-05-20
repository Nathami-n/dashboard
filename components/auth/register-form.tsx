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
import { RegisterSchema } from '@/schema';
import { useState, useTransition } from 'react';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Input } from "@/components/ui/input";
import { registerUser } from '@/actions/user-actions';
import { FormError } from '@/components/auth/form-error';
import { FormSuccess } from '@/components/auth/form-success';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
const RegisterForm = () => {
    const [isPending, startTransition] = useTransition();
    const router = useRouter();
    const [error, setError] = useState<string | undefined>('');
    const [success, setSuccess] = useState<string | undefined>('');
    const form = useForm({
        resolver: zodResolver(RegisterSchema),
        defaultValues: {
            email: "",
            password: "",
        }
    });
    const onSubmit = (values: z.infer<typeof RegisterSchema>) => {
    
      startTransition( async () => {
       const userData = await registerUser(values);
       const {success, payload} = userData;

       if(!success) {
        setError(payload.err);
        return;
       };

       setSuccess("Successfully registered");
       console.log(payload.data);
       router.push('/api/login');
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
                    <FormSuccess message={success as string} />
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