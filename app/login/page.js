import LoginForm from "@/components/loginForm";

export const metadata = {
    title: "Login",
    description: "Login to your account",
}

export default function Login() {
    return (
        <main className="flex flex-col justify-center items-center min-h-[80vh]">
            <h2 className="m-6 text-center text-3xl font-extrabold text-gray-200">
                Sign in to your account
            </h2>
            <div className="w-full m-auto flex items-center justify-center">
                <LoginForm />
            </div>
        </main>
    )
}
