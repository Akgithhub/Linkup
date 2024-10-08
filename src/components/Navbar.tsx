"use client";
import Link from "next/link";
import MobileMenu from "./MobileMenu";
import Image from "next/image";
import { useState } from "react";
import {
  ClerkLoaded,
  ClerkLoading,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
const Navbar = () => {
  const [isActive, setIsActive] = useState("");
  return (
    <div className=" flex items-center justify-between h-24">
      <div className="L md:hidden lg:block w-[20%]">
        <Link href={"/"} className="font-bold text-xl text-blue-600">
          LinkUp
        </Link>
      </div>
      <div className="C hidden md:flex w-[50%] text-sm items-center justify-between">
        <div className="flex gap-6 ">
          <Link
            href="/"
            onClick={() => setIsActive("homepage")}
            className={`flex items-center gap-2 ${
              isActive === "homepage"
                ? "text-gray-900 font-medium text-[16px] ease-in-out duration-300"
                : ""
            }`}
          >
            <Image
              src="/home.png"
              alt="Homepage"
              width={16}
              height={16}
              className="w-4 h-4"
            />
            <span>Homepage</span>
          </Link>
          <Link
            href="/"
            onClick={() => setIsActive("friends")}
            className={`flex items-center gap-2 ${
              isActive === "friends"
                ? "text-gray-900 font-medium text-[16px] ease-in-out duration-300"
                : ""
            }`}
          >
            <Image
              src="/friends.png"
              alt="Friends"
              width={16}
              height={16}
              className="w-4 h-4"
            />
            <span>Friends</span>
          </Link>
          <Link
            href="/"
            onClick={() => setIsActive("stories")}
            className={`flex items-center gap-2 ${
              isActive === "stories"
                ? "text-gray-900 font-medium text-[16px] ease-in-out duration-300"
                : ""
            }`}
          >
            <Image
              src="/stories.png"
              alt="Stories"
              width={16}
              height={16}
              className="w-4 h-4"
            />
            <span>Stories</span>
          </Link>
        </div>
        <div className="hidden xl:flex p-2 bg-slate-100 items-center rounded-xl">
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent outline-none"
          />
          <Image src="/search.png" alt="" width={14} height={14} />
        </div>
      </div>
      <div className="R w-[30%] flex items-center gap-4 xl:gap-8 justify-end ">
        <ClerkLoading>
          <div className="inline-block h-4 w-4 animate-spin rounded-full border-2 border-gray-500 border-solid border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-white" />
        </ClerkLoading>
        <ClerkLoaded>
          <SignedIn>
            <div className="cursor-pointer">
              <Image src="/people.png" alt="" width={24} height={24} />
            </div>
            <div className="cursor-pointer">
              <Image src="/messages.png" alt="" width={20} height={20} />
            </div>
            <div className="cursor-pointer">
              <Image src="/notifications.png" alt="" width={20} height={20} />
            </div>
            <UserButton />
          </SignedIn>
          <SignedOut>
            <div className="flex items-center gap-2 text-sm">
              <Image src="/login.png" alt="" width={20} height={20} />
              <Link href="/sign-in">Login/Register</Link>
            </div>
          </SignedOut>
        </ClerkLoaded>
        <MobileMenu />
      </div>
    </div>
  );
};

export default Navbar;
