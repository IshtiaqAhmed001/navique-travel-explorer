'use client'
import { usePathname, useRouter } from "next/navigation";
import React from "react";
import { MdOutlineShoppingCart } from "react-icons/md";

const CartButton = ({pkg}) => {

    const isLogin = false;
const router = useRouter();
const path = usePathname();

    const addToCart = ()=>{
if(isLogin){
    alert(pkg._id)
}
else{
    router.push(`/login?callbackUrl=${path}`);
}
    }

  return (
    <button onClick={addToCart} className="btn btn-primary flex items-center gap-2">
      <MdOutlineShoppingCart /> Add to Cart
    </button>
  );
};

export default CartButton;
