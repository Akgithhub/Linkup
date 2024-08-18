"use client";
import Link from "next/link";
import MobileMenu from "./MobileMenu";
import Image from "next/image";
import { useState } from "react";
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
                ? "text-gray-700 font-medium text-[16px]"
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
                ? "text-gray-700 font-medium text-[16px]"
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
                ? "text-gray-700 font-medium text-[16px]"
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
      </div>
      <div className="R w-[30%] flex items-center gap-4 xl:gap-8 justify-end ">
        
        <MobileMenu />
      </div>
    </div>
  );
};

export default Navbar;
