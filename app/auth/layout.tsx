

const AuthLayout = ({
    children
}: {
    children: React.ReactNode
}) => {
    return (
        <div className="h-full flex pt-8 items-center justify-center">
            {children}
        </div>
    )
}

export default AuthLayout;