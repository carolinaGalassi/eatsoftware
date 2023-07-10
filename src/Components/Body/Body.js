import { useContext } from "react";
import { ContextProvider, EatContext } from "../../Context/Context";
import { EatSideBar } from "../Sidebar/SideBar";
import { AddButton } from "./Components/Buttons/AddButton";
import { Position } from "./Components/Buttons/Position";
import { SubstracButton } from "./Components/Buttons/Substract";

const ZoomButton = () => {
  return (
    <div className="flex flex-col items-center rounded-lg ring-1 ring-black ring-opacity-5 divide-y">
      <AddButton />
      <SubstracButton />
    </div>
  );
};

const EatBodySelection = () => {
  const { openSideBar } = useContext(EatContext);

  return (
    <div className="bg-zinc-100 w-full">
      <div className="flex gap-2 items-center absolute right-6 bottom-6">
        <ZoomButton />
        <Position />
      </div>

      {openSideBar && (
        <div className="buttons">
          <button
            onClick={(e) => console.log("Se apreto en Fijar")}
            className="rounded-md bg-white p-3 border-2 hover:bg-slate-200"
          >
            Fijar
          </button>
          <button
            onClick={(e) => console.log("Se apreto en Borrar")}
            className="rounded-md bg-white p-3 border-2 hover:bg-slate-200"
          >
            Borrar
          </button>
        </div>
      )}
    </div>
  );
};

export const EatBodyContainer = () => (
  <section className="flex h-full">
    <ContextProvider>
      <EatSideBar />
      <EatBodySelection />
    </ContextProvider>
  </section>
);
