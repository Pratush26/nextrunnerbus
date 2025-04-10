import RegisterForm from "@/components/RegisterForm"

export default function Register() {
    return (
        <main className="flex flex-col justify-center items-center min-h-[80vh]">
            <h2 className="m-6 text-center text-3xl font-extrabold text-gray-200">
                Register your account
            </h2>
            <div className="w-full m-auto flex items-center justify-center">
                <RegisterForm />
            </div>
        </main>
    )
}
