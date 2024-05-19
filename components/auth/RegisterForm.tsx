import { CardWrapper } from "@/components/auth/CardWrapper";

const RegisterForm = () => {
    return (
        <CardWrapper
        headerLabel="Create An account"
        backButtonHref="/auth/login"
        backButtonLabel="Already have an account? Login now"
        showSocial
        >
            <div>Hello</div>

        </CardWrapper>
    )
}

export default RegisterForm;