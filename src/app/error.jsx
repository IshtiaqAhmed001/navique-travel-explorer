'use client'
import React from "react";
import Link from "next/link";
import { BiSolidErrorAlt } from "react-icons/bi";

const error = () => {
  return (
    <div className="flex flex-col gap-5 min-h-screen justify-center items-center">
      <BiSolidErrorAlt size={100} className="text-primary" />
      <h2 className="text-4xl font-bold">Something Went Wrong!</h2>
      <Link href={"/"} className="btn">
        Go to Home
      </Link>
    </div>
  );
};

export default error;
