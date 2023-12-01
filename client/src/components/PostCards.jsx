import React, { useState } from "react";
import { HeartIcon, ChatBubbleLeftIcon } from "@heroicons/react/24/outline";
import { HeartIcon as HeartFilled } from "@heroicons/react/20/solid";
const PostCards = ({ username, image, avatar }) => {
  const [liked, setLiked] = useState(false);
  return (
    <div className="h-56 w-full max-w-xs rounded-md  border my-2 shadow-md flex flex-col py-0.5">
      <div className="px-1 flex items-center">
        <img className="h-7 w-7 rounded-full border p-0.5" src={avatar} />
        <h4 className="text-xs">{username}</h4>
      </div>
      <img className="w-full flex-1" src={image} />
      <div className="flex gap-2">
        {liked ? (
          <HeartFilled
            className="h-5 w-5 text-red-500 cursor-pointer"
            onClick={() => setLiked(!liked)}
          />
        ) : (
          <HeartIcon
            className="h-5 w-5 cursor-pointer"
            onClick={() => setLiked(!liked)}
          />
        )}
        <ChatBubbleLeftIcon className="h-5 w-5 cursor-pointer" />
      </div>
    </div>
  );
};

export default PostCards;
