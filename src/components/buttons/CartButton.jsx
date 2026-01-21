"use client";
import { handleCart } from "@/actions/server/cart";
import { useSession } from "next-auth/react";
import { usePathname, useRouter } from "next/navigation";
import React from "react";
import { MdOutlineShoppingCart } from "react-icons/md";
import Swal from "sweetalert2";

const CartButton = ({ pkg }) => {
  const session = useSession();
  const isLogin = session?.status == "authenticated";

  const router = useRouter();
  const path = usePathname();

  const addToCart = async () => {
    if (isLogin) {
      const result = await handleCart({ pkg, inc: true });
      if (result.success) {
        Swal.fire(`Added to the cart!`, pkg?.title, "success");
      } else {
        Swal.fire(`Error`, "Could not add item to the cart!", "error");
      }
    } else {
      router.push(`/login?callbackUrl=${path}`);
    }
  };

  return (
    <button
      onClick={addToCart}
      className="btn btn-primary flex items-center gap-2 w-full"
    >
      <MdOutlineShoppingCart /> Add to Cart
    </button>
  );
};

export default CartButton;
