import React from "react";
import Image from "next/image";
const Stories = () => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md overflow-x-auto text-xs ">
      <div className="flex gap-8 w-max">
        <div className="flex flex-col gap-2 items-center cursor-pointer">
          <Image
            src="https://images.pexels.com/photos/26347254/pexels-photo-26347254/free-photo-of-portrait-of-a-man-in-a-black-shirt.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt="Portrait of Aman"
            width={80}
            height={80}
            className="h-20 w-20 object-cover rounded-full ring-2 ring-blue-500"
          />
          <span className="font-medium">Aman</span>
        </div>
      </div>
    </div>
  );
};

export default Stories;
