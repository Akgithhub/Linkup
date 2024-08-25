import React from "react";
import Image from "next/image";
const Comments = () => {
  return (
    <div className="">
      {/* WRITE */}
      <div className="flex items-center gap-4">
        <Image
          src="https://images.pexels.com/photos/26707294/pexels-photo-26707294/free-photo-of-nephila-clavipes-on-a-spider-web.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load"
          width={32}
          height={32}
          className="w-8 h-8 rounded-full"
          alt=""
        />
        <div className="flex-1 flex items-center justify-between bg-slate-100 rounded-xl text-sm px-6 py-6 w-full">
          <input
            type="text"
            placeholder="Enter Your Comment"
            className="outline-none bg-transparent flex-1"
          />
          <Image
            src="/emoji.png"
            width={16}
            height={16}
            className="cursor-pointer"
            alt=""
          />
        </div>
      </div>
      {/* COMMENTS */}
      <div className="">
        {/* COMMENT */}
        <div className="flex gap-4 justify-between mt-6">
          {/* AVATAR */}
          <Image
            src="https://images.pexels.com/photos/26690029/pexels-photo-26690029/free-photo-of-iceberg-and-ice-on-sea-shore.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load"
            alt=""
            width={40}
            height={40}
            className="w-10 h-10 rounded-full"
          />
          {/* DESC */}
          <div className="flex flex-col gap-2 flex-1">
            <span className="font-medium">User Name</span>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste
              esse maxime quibusdam voluptas, deserunt porro sapiente
              praesentium iure. Dolor, soluta.
            </p>
            <div className="flex items-center gap-8 text-xs text-gray-500 mt-2">
              <div className="flex items-center gap-4">
                <Image
                  src="/like.png"
                  alt=""
                  width={12}
                  height={12}
                  className="cursor-pointer w-4 h-4"
                />
                <span className="text-gray-300">|</span>
                <span className="text-gray-500">0 Likes</span>
              </div>
              <div className="cursor-pointer">Reply</div>
            </div>
          </div>
          {/* ICON */}
          <Image src="" alt="" className="" />
        </div>
      </div>
    </div>
  );
};

export default Comments;
