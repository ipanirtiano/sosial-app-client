import { BsPersonAdd } from "react-icons/bs";

const SuggestionFriends = () => {
  return (
    <>
      <div className="w-full bg-white p-3 shadow-md rounded-md space-y-3">
        <p className="font-semibold text-sm mb-4 text-gray-500">
          Suggestions Friens
        </p>

        <div className="flex justify-between">
          <div className="flex gap-2 items-center cursor-pointer">
            <img
              src="https://avatars.githubusercontent.com/u/134725592?v=4"
              alt=""
              className="w-8 h-8 rounded-full bg-gray-200"
            />
            <div>
              <p className="font-semibold">Ipan Irtiano</p>
              <p className="text-xs text-gray-500">40 Mutual Friends</p>
            </div>
          </div>
          <div className="flex items-center cursor-pointer">
            <BsPersonAdd className="text-xl" />
          </div>
        </div>

        <div className="flex justify-between">
          <div className="flex gap-2 items-center cursor-pointer">
            <img
              src="https://avatars.githubusercontent.com/u/134725592?v=4"
              alt=""
              className="w-8 h-8 rounded-full bg-gray-200"
            />
            <div>
              <p className="font-semibold">Ipan Irtiano</p>
              <p className="text-xs text-gray-500">40 Mutual Friends</p>
            </div>
          </div>
          <div className="flex items-center cursor-pointer">
            <BsPersonAdd className="text-xl" />
          </div>
        </div>

        <div className="flex justify-between">
          <div className="flex gap-2 items-center cursor-pointer">
            <img
              src="https://avatars.githubusercontent.com/u/134725592?v=4"
              alt=""
              className="w-8 h-8 rounded-full bg-gray-200"
            />
            <div>
              <p className="font-semibold">Ipan Irtiano</p>
              <p className="text-xs text-gray-500">40 Mutual Friends</p>
            </div>
          </div>
          <div className="flex items-center cursor-pointer">
            <BsPersonAdd className="text-xl" />
          </div>
        </div>

        <div className="flex justify-between">
          <div className="flex gap-2 items-center cursor-pointer">
            <img
              src="https://avatars.githubusercontent.com/u/134725592?v=4"
              alt=""
              className="w-8 h-8 rounded-full bg-gray-200"
            />
            <div>
              <p className="font-semibold">Ipan Irtiano</p>
              <p className="text-xs text-gray-500">40 Mutual Friends</p>
            </div>
          </div>
          <div className="flex items-center cursor-pointer">
            <BsPersonAdd className="text-xl" />
          </div>
        </div>
      </div>
    </>
  );
};

export default SuggestionFriends;
