"use client";

import { useForm } from "react-hook-form";
import { useState } from "react";
import Image from "next/image";

export default function LoginForm() {
    const [isLoading, setIsLoading] = useState(false);
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = async (data) => {
        setIsLoading(true);
        try {
            // Handle login logic here
            console.log(data);
        } catch (error) {
            console.error(error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="w-3/4 bg-gray-900 p-6 m-auto rounded-lg">
            <form className="md:w-1/2 sm:w-3/4 w-full mx-auto my-8" onSubmit={handleSubmit(onSubmit)}>
                <div className="rounded-md shadow-sm -space-y-px">
                    <div>
                        <label htmlFor="email" className="sr-only">
                            Email address
                        </label>
                        <input
                            {...register("email", {
                                required: "Email is required",
                                pattern: {
                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                    message: "Invalid email address",
                                },
                            })}
                            id="email"
                            type="email"
                            className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-700 placeholder-gray-500 text-gray-200 rounded-t-md focus:outline-none focus:ring-cyan-500 focus:border-cyan-500 focus:z-10 sm:text-sm bg-gray-800"
                            placeholder="Email address"
                        />
                        {errors.email && (
                            <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
                        )}
                    </div>
                    <div>
                        <label htmlFor="password" className="sr-only">
                            Password
                        </label>
                        <input
                            {...register("password", {
                                required: "Password is required",
                                minLength: {
                                    value: 6,
                                    message: "Password must be at least 6 characters",
                                },
                            })}
                            id="password"
                            type="password"
                            className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-700 placeholder-gray-500 text-gray-200 rounded-b-md focus:outline-none focus:ring-cyan-500 focus:border-cyan-500 focus:z-10 sm:text-sm bg-gray-800"
                            placeholder="Password"
                        />
                        {errors.password && (
                            <p className="mt-1 text-sm text-red-500">{errors.password.message}</p>
                        )}
                    </div>
                </div>

                <div className="flex w-full items-center justify-between p-4">
                    <div className="flex items-center">
                        <input
                            id="remember-me"
                            name="remember-me"
                            type="checkbox"
                            className="h-4 w-4 text-cyan-600 focus:ring-cyan-500 border-gray-700 rounded bg-gray-800"
                        />
                        <label htmlFor="remember-me" className="ml-2 block text-sm text-center text-gray-300">
                            Remember me
                        </label>
                    </div>

                    <div className="text-sm text-center">
                        <a href="#" className="font-medium text-cyan-600 hover:text-cyan-500">
                            Forgot your password?
                        </a>
                    </div>
                </div>

                <div>
                    <button
                        type="submit"
                        disabled={isLoading}
                        className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-bold rounded-md text-white bg-cyan-700 hover:bg-cyan-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500"
                    >
                        {isLoading ? "Signing in..." : "Sign in"}
                    </button>
                </div>
            </form>

            <div className="mt-6">
                <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-gray-700"></div>
                    </div>
                    <div className="relative flex justify-center text-sm">
                        <span className="px-2 bg-gray-900 text-gray-400">Or</span>
                    </div>
                </div>

                <div className="mt-6">
                    <button
                        type="button"
                        className="md:w-1/2 sm:w-3/4 w-full mx-auto flex items-center justify-center px-4 py-2 border border-gray-700 rounded-md shadow-sm text-sm font-medium text-gray-200 bg-gray-800 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500"
                    >
                        <Image
                            src="/google.svg"
                            alt="Google logo"
                            width={20}
                            height={20}
                            className="mr-2"
                        />
                        Continue with Google
                    </button>
                </div>
            </div>
        </div>
    );
}
