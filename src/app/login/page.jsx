"use client";

import SocialLogin from "@/components/SocialLogin/SocialLogin";
import React from "react";
import { FcGoogle } from "react-icons/fc";
import { signIn } from "next-auth/react";
import Swal from "sweetalert2";
import { useRouter, useSearchParams } from "next/navigation";

const LoginPage = () => {
  const params = useSearchParams();
  
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();

    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    const userData = {
      email,
      password,
    };

    const result = await signIn("credentials", {
      email: userData.email,
      password: userData.password,
      redirect: true,
      callbackUrl:params.get('callbackUrl') || "/"
    });
    if(!result.ok){
      Swal.fire("error","Email, Password did not match!","error")
    }
    else{
            Swal.fire("success", "Welcome to Navique!", "success");
    }
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200 px-4">
      <div className="max-w-md w-full bg-base-100 p-8 rounded-xl shadow-lg">
        <h2 className="text-2xl font-bold text-center mb-6">
          Login to Navique
        </h2>

        {/* Email & Password */}
        <form onSubmit={handleLogin} className="flex flex-col gap-4">
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
            Login
          </button>
        </form>

        <div className="divider my-6">OR</div>

        {/* Google Login */}
        <SocialLogin />

        <p className="text-center text-sm text-gray-500 mt-4">
          Don’t have an account?{" "}
          <a href="/register" className="text-primary font-semibold">
            Sign Up
          </a>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
