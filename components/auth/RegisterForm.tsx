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
import {zodResolver} from '@hookform/resolvers/zod';
import { Input } from "@/components/ui/input";

const RegisterForm = () => {
    const [isPending, startTransition] = useTransition();
    const [error, setError] = useState<string | undefined>('');
    const [success, setSuccess] = useState<string |undefined>('');
    const form = useForm({
        resolver: zodResolver(RegisterSchema),
        defaultValues: {
            email: "",
            password: "",
            name:""
        }
    });
    const onSubmit = async (data: z.infer<typeof RegisterSchema>) => {

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
                    <div>
                        <FormField
                        control={form.control}
                        name="name"
                        render={({field})=> (
                            <FormItem>
                                <FormLabel>
                                    Name
                                </FormLabel>
                                <FormControl>
                                    <Input
                                    disabled={isPending}
                                    {...field}
                                    type="text"
                                    placeholder="John Doe"
                                    />
                                </FormControl>
                                <FormMessage/>
                            </FormItem>
                        )}
                        />
                    </div>
                </form>
            </Form>

        </CardWrapper>
    )
}

export default RegisterForm;