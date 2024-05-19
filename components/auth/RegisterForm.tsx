import { CardWrapper } from "@/components/auth/CardWrapper";
import {Form}  from "@/components/ui/form";
import {useForm} from 'react-hook-form';
import {RegisterSchema} from '@/schema';
import {zodResolver} from '@hookform/resolvers/zod';

const RegisterForm = () => {
    const form = useForm({
        resolver: zodResolver(RegisterSchema),
        defaultValues: {
            email: "",
            password: "",
            name:""
        }
    });
    return (
        <CardWrapper
        headerLabel="Create An account"
        backButtonHref="/auth/login"
        backButtonLabel="Already have an account? Login now"
        showSocial
        >
            <Form>

            </Form>

        </CardWrapper>
    )
}

export default RegisterForm;