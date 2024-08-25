import React from "react";
import Image from "next/image";
import { Suspense } from "react";
import Comments from "./Comments";
const Post = () => {
  return (
    <div className="flex flex-col gap-4">
      {/* USER */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          {/* AVATAR */}
          <Image
            src="https://images.pexels.com/photos/26691734/pexels-photo-26691734/free-photo-of-photo-of-jellyfish-swimming-underwater.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load"
            width={40}
            height={40}
            alt=""
            className="w-10 h-10 rounded-full"
          />
          <span className="font-medium">User Name</span>
        </div>
        <Image
          src="/more.png"
          width={16}
          height={16}
          alt=""
          className="cursor-pointer"
        />
      </div>
      {/* DESC */}
      <div className="flex flex-col gap-4">
        <div className="w-full min-h-96 relative">
          <Image
            src="https://images.pexels.com/photos/26455238/pexels-photo-26455238/free-photo-of-underwater-photo-of-a-shark.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load"
            fill
            className="object-cover rounded-md"
            alt=""
          />
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
          fuga quidem ipsam hic cum sint ex totam non ea dolorum, magni tempore
          odio. Magni natus eum mollitia eveniet quas exercitationem!
        </p>
      </div>
      {/* INTERACTION */}
      <div className="flex items-center justify-between text-sm my-4">
        <div className="flex gap-8">
          <div className="flex items-center gap-4 bg-slate-50 p-2 rounded-xl">
            <Image
              src="/like.png"
              width={16}
              height={16}
              className="cursor-pointer"
              alt=""
            />
            <span className="text-gray-500">|</span>
            <span className="text-gray-500">
              123 <span className="hidden md:inline">Likes</span>
            </span>
          </div>
          <div className="flex items-center gap-4 bg-slate-50 p-2 rounded-xl">
            <Image
              src="/comment.png"
              width={16}
              height={16}
              className="cursor-pointer"
              alt=""
            />
            <span className="text-gray-500">|</span>
            <span className="text-gray-500">
              123 <span className="hidden md:inline">Comment</span>
            </span>
          </div>
        </div>
        <div className="flex items-center gap-4 bg-slate-50 p-2 rounded-xl">
          <Image
            src="/share.png"
            width={16}
            height={16}
            className="cursor-pointer"
            alt=""
          />
          <span className="text-gray-500">|</span>
          <span className="text-gray-500">
            123 <span className="hidden md:inline">Share</span>
          </span>
        </div>
      </div>
      <Comments/>
    </div>
  );
};

export default Post;
