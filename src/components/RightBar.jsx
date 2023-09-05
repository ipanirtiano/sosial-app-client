import Online from "./Online";
import SuggestionFriends from "./SuggestionFriends";

const RightBar = () => {
  return (
    <>
      <div className="md:w-[20%] pt-[70px] h-screen hidden lg:block text-gray-900 overflow-auto">
        <div className="space-y-5">
          <SuggestionFriends />
          <Online />
        </div>
      </div>
    </>
  );
};

export default RightBar;
