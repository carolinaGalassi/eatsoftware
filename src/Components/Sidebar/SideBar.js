import { useContext, useState } from "react";
import { sidebarOptions } from "./Data";
import { SubOptions } from "./Components/SubOptions";
import { SideBarOption } from "./Components/SideBarOption";
import { EatContext } from "../../Context/Context";

export const EatSideBar = () => {
  const [openSideBar, setOpenSideBar] = useState({
    id: "",
    open: false,
  });

  const { updateStep, updateOpenSideBar } = useContext(EatContext);

  const handleSidebar = (id) => {
    setOpenSideBar((prev) => {
      if (prev.id === "" || id === prev.id) {
        if (prev.open) updateStep(1);
        updateOpenSideBar(!prev.open);
        return {
          id: prev.id ? "" : id,
          open: !prev.open,
        };
      } else if (id !== prev.id) {
        updateStep(1);
        updateOpenSideBar(true);
        return { id, open: true };
      }
    });
  };

  return (
    <div className="relative inline-block flex flex-col justify-center gap-4 px-3 ">
      {sidebarOptions.map((option) => (
        <SideBarOption
          key={option.id}
          handleSidebar={handleSidebar}
          {...option}
        />
      ))}
      <SubOptions openSideBar={openSideBar.open} option={openSideBar.id} />
    </div>
  );
};
