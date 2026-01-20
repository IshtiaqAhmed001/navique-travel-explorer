"use client";

import { postUser } from "@/actions/server/auth";
import SocialLogin from "@/components/SocialLogin/SocialLogin";
import { useRouter } from "next/navigation";
import React from "react";
import { FcGoogle } from "react-icons/fc";

const RegisterPage = () => {
  const router = useRouter();

  const handleRegister = async(e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;

    const userData = {
      name,
      email,
      password,
    };

    const result = await postUser(userData);
    if(result.acknowledged){
      alert('Registration successful, please login!')
      router.push('/login')
    }
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200 px-4">
      <div className="max-w-md w-full bg-base-100 p-8 rounded-xl shadow-lg">
        <h2 className="text-2xl font-bold text-center mb-6">
          Create an Account
        </h2>

        {/* Name, Email & Password */}
        <form onSubmit={handleRegister} className="flex flex-col gap-4">
          <input
            name="name"
            type="text"
            placeholder="Full Name"
            className="input input-bordered w-full"
            required
          />
          <input
            name="email"
            type="email"
            placeholder="Email"
            className="input input-bordered w-full"
            required
          />
          <input
            name="password"
            type="password"
            placeholder="Password"
            className="input input-bordered w-full"
            required
          />

          <button type="submit" className="btn btn-primary w-full mt-2">
            Register
          </button>
        </form>

        <div className="divider my-6">OR</div>

        {/* Google Register/Login */}
        <SocialLogin />

        <p className="text-center text-sm text-gray-500 mt-4">
          Already have an account?{" "}
          <a href="/login" className="text-primary font-semibold">
            Login
          </a>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;
