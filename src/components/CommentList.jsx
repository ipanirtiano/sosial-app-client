import moment from "moment";

/* eslint-disable react/prop-types */
const CommentList = ({ comment }) => {
  return (
    <>
      <div className="w-full flex gap-3 mt-2 pt-2 items-start">
        <div className="w-10 mt-1">
          <img
            src={comment.user.profile_pic}
            alt=""
            className="w-8 h-8 rounded-full object-cover bg-gray-200"
          />
        </div>
        <div className="w-full">
          <div className="flex items-center gap-3 justify-between">
            <p className="text-sm font-semibold">{comment.user.name}</p>
            <p className="text-xs text-gray-500 mb-1">
              {moment(comment.createdAt).fromNow()}
            </p>
          </div>
          <p className="text-sm">{comment.desc}</p>
        </div>
      </div>
    </>
  );
};

export default CommentList;
