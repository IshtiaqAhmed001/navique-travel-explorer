"use client";

import { signIn } from "next-auth/react";
import React from "react";
import { FcGoogle } from "react-icons/fc";
import Swal from "sweetalert2";

const SocialLogin = () => {
  const handleSignIn =async ()=>{
    // const result = await signIn('google',{redirect:'false'})

    // console.log(result);
    // if(result.ok){
    //   Swal.fire('success',"Welcome to Navique","success");
    // }
    // else{
    //   Swal.fire('error',"Sorry, could not login","error");
    // }
  }
  return (
    <button
    onClick={handleSignIn}
      type="button"
      className="btn btn-outline w-full flex items-center justify-center gap-2"
    >
      <FcGoogle size={24} />
      <span>Continue with Google</span>
    </button>
  );
};

export default SocialLogin;
