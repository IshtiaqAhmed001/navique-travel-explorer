"use client";

import React from "react";
import { FcGoogle } from "react-icons/fc";

const SocialLogin = ({ provider = "Google", onClick }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className="btn btn-outline w-full flex items-center justify-center gap-2"
    >
      {provider === "Google" && <FcGoogle size={24} />}
      {provider === "Google"
        ? `Continue with ${provider}`
        : `Login with ${provider}`}
    </button>
  );
};

export default SocialLogin;
