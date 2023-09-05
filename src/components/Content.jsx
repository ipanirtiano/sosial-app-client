/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { BsFillTrash3Fill, BsShare, BsThreeDotsVertical } from "react-icons/bs";
import { AiOutlineLike } from "react-icons/ai";
import { BiCommentDetail } from "react-icons/bi";
import moment from "moment";
import Comments from "./Comments";
import { useState } from "react";

const Content = ({ post }) => {
  const [oppen, setOpen] = useState(false);
  const [togleDelete, setTogleDelete] = useState(false);

  return (
    <>
      <div className="w-full bg-white py-3 md:px-4 px-3 rounded-md mt-[20px] text-gray-900 relative">
        <div className="flex justify-between items-start">
          <div className="flex items-center gap-3">
            <div className="cursor-pointer">
              <img
                src={post.user.profile_pic}
                alt=""
                className="w-8 h-8 rounded-full object-cover bg-gray-200"
              />
            </div>
            <div>
              <p className="font-semibold">{post.user.name}</p>
              <p className="text-xs text-gray-500">
                {moment(post.createdAt).fromNow()}
              </p>
            </div>
          </div>
          <div
            onClick={() => setTogleDelete(!togleDelete)}
            className="cursor-pointer"
          >
            <BsThreeDotsVertical />
          </div>
          {togleDelete && (
            <div className="absolute top-8 right-4 bg-slate-100 shadow-md py-2 px-3">
              <ul className="cursor-pointer flex gap-2">
                <li className="text-xs ">Delete Post</li>
                <BsFillTrash3Fill className="text-gray-500" />
              </ul>
            </div>
          )}
        </div>

        <div className="mt-4">
          <p className="text-sm mb-2">{post.desc}</p>
          <img
            className="mb-2"
            src={"https://sosial-app-server-api.vercel.app/upload/" + post.img}
            alt=""
          />
        </div>

        <div className="flex items-center gap-4 pt-5">
          <div className="flex items-center gap-2 cursor-pointer">
            <AiOutlineLike />
            <p className="text-sm">21 Likes</p>
          </div>

          <div
            onClick={() => setOpen(!oppen)}
            className="flex items-center gap-2 cursor-pointer"
          >
            <BiCommentDetail />
            <p className="text-sm">Comments</p>
          </div>

          <div className="flex items-center gap-2 cursor-pointer">
            <BsShare />
            <p className="text-sm">Share</p>
          </div>
        </div>
        {oppen && <Comments postId={post.id} />}
      </div>
    </>
  );
};
export default Content;
