import { options } from "../Data";

export const SubOptions = ({ openSideBar, option }) => {
  return (
    <div
      className={`${
        openSideBar ? "block" : "hidden"
      } absolute inset-y-0 left-32 z-10 w-96 bg-stone-50 `}
    >
      <div className="p-3" role="none">
        {options[option]}
      </div>
    </div>
  );
};
