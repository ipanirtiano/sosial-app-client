/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import Loading from "./Loading";
import CommentList from "./CommentList";

/* eslint-disable react/prop-types */
const Comments = ({ postId }) => {
  const { user } = useSelector((state) => state.user);
  const [userInfo, setUserInfo] = useState([]);
  const [desc, setDesc] = useState("");

  useEffect(() => {
    if (user) {
      setUserInfo(user);
    }
  }, [user]);

  const queryClient = useQueryClient();

  const { isLoading, error, data } = useQuery(["comments"], () =>
    axios
      .get(`https://sosial-app-server-api.vercel.app/comments/${postId}`)
      .then((res) => {
        return res.data;
      })
  );

  const mutation = useMutation(
    (newComment) => {
      return axios.post(
        "https://sosial-app-server-api.vercel.app/comments",
        newComment
      );
    },
    {
      onSuccess: () => {
        // Invalidate and refetch
        queryClient.invalidateQueries(["comments"]);
      },
    }
  );

  const handleClick = async (e) => {
    e.preventDefault();
    mutation.mutate({ desc, postId });
    setDesc("");
  };

  return (
    <>
      <div className="w-full flex gap-3 mt-4 border-b pt-2 pb-3 items-center">
        <div className="w-10">
          <img
            src={userInfo.profile_pic}
            alt=""
            className="w-8 h-8 rounded-full object-cover bg-gray-200"
          />
        </div>
        <div className="w-full flex items-center gap-2">
          <input
            type="text"
            className="w-full placeholder:text-sm text-sm outline-none border-none"
            placeholder="Comments here.."
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          />
          <button
            onClick={handleClick}
            className="text-xs bg-blue-600 text-white p-2"
          >
            Send
          </button>
        </div>
      </div>

      {error ? (
        "Opps something went wrong!"
      ) : isLoading ? (
        <Loading />
      ) : (
        data.map((comment, i) => {
          return <CommentList key={i} comment={comment} />;
        })
      )}
    </>
  );
};

export default Comments;
