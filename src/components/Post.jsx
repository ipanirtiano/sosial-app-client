/* eslint-disable react/prop-types */
import img1 from "../assets/img.png";
import img2 from "../assets/map.png";
import img3 from "../assets/friend.png";
import { BsFillSendFill } from "react-icons/bs";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import axios from "axios";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const Post = () => {
  // set Query Client
  const queryClient = useQueryClient();
  // state user
  const { user } = useSelector((state) => state.user);
  const [userInfo, setUserInfo] = useState([]);
  const [file, setFile] = useState(null);
  const [desc, setDesc] = useState("");

  useEffect(() => {
    if (user) {
      setUserInfo(user);
    }
  }, [user]);

  // set mutation (useMutation) will re fetch if done or sucess results
  const mutation = useMutation(
    (newPost) => {
      return axios.post(
        "https://sosial-app-server-api.vercel.app/post",
        newPost
      );
    },
    {
      onSuccess: () => {
        // Invalidate and refetch
        queryClient.invalidateQueries(["posts"]);
      },
    }
  );

  // function upload
  const upload = async () => {
    try {
      const formData = new FormData();
      formData.append("file", file);

      const res = await axios.post(
        "https://sosial-app-server-api.vercel.app/upload",
        formData
      );
      return res.data;
    } catch (err) {
      console.log(err);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (desc === "") return;

    let imgUrl = "";
    if (file) imgUrl = await upload();

    mutation.mutate({ desc, img: imgUrl });
    setDesc("");
    setFile(null);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="w-full bg-white py-3 md:px-4 px-3 rounded-md mt-[20px]">
          <div className="flex items-start gap-3 mb-4 w-[100%]">
            <div className="cursor-pointer w-12">
              <img
                src={userInfo.profile_pic}
                alt=""
                className="w-8 h-8 object-cover rounded-full bg-gray-200"
              />
            </div>
            <div className="w-full">
              <textarea
                className="border-none outline-none w-full resize-none placeholder:text-sm py-1"
                placeholder="Post here..."
                value={desc}
                onChange={(e) => setDesc(e.target.value)}
              ></textarea>
            </div>
            <div className="w-[120px]">
              {file && (
                <img
                  className="object-cover w-full h-[60px]"
                  alt=""
                  src={URL.createObjectURL(file)}
                />
              )}
            </div>
          </div>

          <div className="flex justify-between">
            <div className="flex items-center md:gap-5 gap-2">
              <div className="flex gap-2 cursor-pointer items-center">
                <input
                  type="file"
                  id="file"
                  className=" text-sm text-slate-500  hidden"
                  onChange={(e) => setFile(e.target.files[0])}
                />
                <label htmlFor="file">
                  <div className="item flex gap-2 cursor-pointer items-center">
                    <img src={img1} alt="" className="w-5 h-5" />
                    <span className="text-sm text-gray-600 font-semibold hidden md:block">
                      Add Image
                    </span>
                  </div>
                </label>
              </div>
              <div className="flex gap-2 cursor-pointer">
                <img src={img2} alt="" className="w-5 h-5" />
                <p className="text-sm text-gray-600 font-semibold hidden md:block">
                  Add Location
                </p>
              </div>
              <div className="flex gap-2 cursor-pointer">
                <img src={img3} alt="" className="w-5 h-5" />
                <p className="text-sm text-gray-600 font-semibold hidden md:block">
                  Add Freind
                </p>
              </div>
            </div>

            <button
              type="submit"
              className="bg-blue-600 text-white px-2 py-1 text-sm cursor-pointer flex gap-2 items-center rounded-sm hover:bg-blue-700"
            >
              <BsFillSendFill className="text-xs" />
              <p>Post</p>
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default Post;
