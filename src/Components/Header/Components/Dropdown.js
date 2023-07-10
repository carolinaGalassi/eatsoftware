import { useState } from "react";
import { ArrowButtonIcon } from "./ArrowButton";
import { Options } from "./Options";

export const DropDown = () => {
  const [openDropDown, setOpenDropDown] = useState(false);

  const handleDropDown = (e) => setOpenDropDown((prev) => !prev);

  return (
    <div className="relative inline-block text-left">
      <ArrowButtonIcon handleDropDown={handleDropDown} />
      <Options openDropDown={openDropDown} handleDropDown={handleDropDown} />
    </div>
  );
};
